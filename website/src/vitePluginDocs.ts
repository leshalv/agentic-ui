import path from 'path';
import type { Plugin } from 'vite';

import matter from 'gray-matter';

import { getDemoId } from './dumiDemoId';

function parseCodeAttrs(attrString: string): Record<string, string | boolean> {
  const attrs: Record<string, string | boolean> = {};
  const re = /(\w+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
  let m;
  while ((m = re.exec(attrString))) {
    const key = m[1];
    const val = m[2] ?? m[3] ?? m[4];
    attrs[key] = val === undefined ? true : val;
  }
  return attrs;
}

/** Dumi 支持 `<code src ...></code>` 或 `<code src ...>标题</code>`（内部文案仅作说明，不参与 Demo） */
const CODE_RE = /<code\s+([^>]+)>([\s\S]*?)<\/code>/gi;

/** Dumi 标题写法 `### 标题 {#anchor}` 在 MDX 中会被 `{` 当成 JSX 表达式解析而报错；围栏内不处理，避免误伤示例代码 */
const HEADING_DUMI_ANCHOR_RE =
  /^(#{1,6}\s+.+?)\s+\{#([a-zA-Z0-9_.-]+)\}\s*$/;

function stripDumiHeadingAnchors(content: string): string {
  const lines = content.split('\n');
  const out: string[] = [];
  let inFence = false;
  let fenceOpenLen = 0;
  let fenceChar: '`' | '~' = '`';

  for (const line of lines) {
    const t = line.trim();
    if (!inFence) {
      const open = t.match(/^(`{3,}|~{3,})/);
      if (open) {
        inFence = true;
        fenceOpenLen = open[0].length;
        fenceChar = open[0][0] as '`' | '~';
        out.push(line);
        continue;
      }
      const hm = line.match(HEADING_DUMI_ANCHOR_RE);
      out.push(hm ? hm[1] : line);
      continue;
    }
    const onlyFence = t.match(/^(`+|~+)$/);
    if (
      onlyFence &&
      onlyFence[1][0] === fenceChar &&
      onlyFence[1].length >= fenceOpenLen
    ) {
      inFence = false;
    }
    out.push(line);
  }
  return out.join('\n');
}

/** 围栏内字符区间 [start, end)，用于跳过 HTML 注释替换 */
function getFenceExcludedCharRanges(content: string): [number, number][] {
  const ranges: [number, number][] = [];
  const lines = content.split('\n');
  let inFence = false;
  let fenceOpenLen = 0;
  let fenceChar: '`' | '~' = '`';
  let rangeStart = 0;
  let offset = 0;

  for (let li = 0; li < lines.length; li++) {
    const line = lines[li];
    const lineStart = offset;
    offset += line.length + (li < lines.length - 1 ? 1 : 0);
    const t = line.trim();

    if (!inFence) {
      const open = t.match(/^(`{3,}|~{3,})/);
      if (open) {
        inFence = true;
        fenceOpenLen = open[0].length;
        fenceChar = open[0][0] as '`' | '~';
        rangeStart = lineStart;
      }
      continue;
    }
    const onlyFence = t.match(/^(`+|~+)$/);
    if (
      onlyFence &&
      onlyFence[1][0] === fenceChar &&
      onlyFence[1].length >= fenceOpenLen
    ) {
      inFence = false;
      ranges.push([rangeStart, offset]);
    }
  }
  return ranges;
}

function isIndexInsideRanges(index: number, ranges: [number, number][]): boolean {
  return ranges.some(([a, b]) => index >= a && index < b);
}

/**
 * MDX 不支持 HTML 块注释，会按 JSX 解析失败；转为 MDX 块注释形式。
 * 围栏（含代码围栏内示例）中的注释不转换，以免破坏需展示原文的文档（如 chart-config）。
 */
function htmlCommentsToJsxComments(content: string): string {
  const ranges = getFenceExcludedCharRanges(content);
  const re = /<!--([\s\S]*?)-->/g;
  let m: RegExpExecArray | null;
  let out = '';
  let last = 0;
  while ((m = re.exec(content))) {
    if (isIndexInsideRanges(m.index, ranges)) {
      out += content.slice(last, m.index + m[0].length);
      last = m.index + m[0].length;
      continue;
    }
    out += content.slice(last, m.index);
    const inner = m[1].replace(/\*\//g, '* /');
    out += `{/*${inner}*/}`;
    last = m.index + m[0].length;
  }
  out += content.slice(last);
  return out;
}

function isDocsMarkdown(id: string): boolean {
  const n = id.replace(/\\/g, '/');
  return n.includes('/docs/') && n.endsWith('.md');
}

function transformIndexHome(_rawBody: string): string {
  return `import HomePage from '../home/demo-components/HomePage/index';

export default function DocsHomePage() {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingTop: 142,
        overflowX: 'hidden',
        backgroundColor: '#fff',
      }}
    >
      <HomePage />
    </div>
  );
}
`;
}

export function vitePluginDocs(projectRoot: string): Plugin {
  return {
    name: 'vite-plugin-docs',
    enforce: 'pre',
    transform(code, id) {
      if (!isDocsMarkdown(id)) {
        return null;
      }

      const isIndexHome =
        id.replace(/\\/g, '/').endsWith('docs/index.md') ||
        id.replace(/\\/g, '/').endsWith('docs\\index.md');

      if (isIndexHome) {
        return {
          code: transformIndexHome(code),
          map: null,
        };
      }

      const { data: frontmatter, content: rawContent } = matter(code);
      const atomId = frontmatter.atomId as string | undefined;
      const content = rawContent.replace(/\r\n/g, '\n');

      CODE_RE.lastIndex = 0;
      let body = htmlCommentsToJsxComments(stripDumiHeadingAnchors(content));
      body = body.replace(CODE_RE, (full, attrsStr: string) => {
        const attrs = parseCodeAttrs(attrsStr);
        const srcRaw = attrs.src;
        if (!srcRaw || typeof srcRaw !== 'string') {
          return full;
        }
        const resolvedSrc = path.normalize(
          path.resolve(path.dirname(id), srcRaw),
        );
        const baseName = path.parse(
          resolvedSrc.replace(/\\/g, '/').replace(/\/index\.(j|t)sx?$/, ''),
        ).name;
        const localId = (attrs.id as string) || baseName;
        const demoId = getDemoId(projectRoot, id, String(localId), atomId);
        const iframe = Number(attrs.iframe) || 540;
        const bg =
          typeof attrs.background === 'string'
            ? attrs.background
            : 'var(--main-bg-color)';
        return `<DemoBlock demoId={${JSON.stringify(demoId)}} iframeHeight={${iframe}} background={${JSON.stringify(bg)}} />`;
      });

      const out = `import { DemoBlock } from '@docs-app/components/DemoBlock';

export const frontmatter = ${JSON.stringify(frontmatter)};

${body}
`;
      return { code: out, map: null };
    },
  };
}

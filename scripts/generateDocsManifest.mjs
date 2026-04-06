/**
 * Generates website/src/generated/docRoutes.ts and demoLoaders.ts for Vite docs site.
 * Demo ids match dumi (getCodeId / getFileIdFromFsPath).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { glob } from 'glob';
import matter from 'gray-matter';
import { kebabCase } from 'lodash-es';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DOCS = path.join(ROOT, 'docs');
const OUT_DIR = path.join(ROOT, 'website', 'src', 'generated');

function getFileIdFromFsPath(fsPath) {
  const normalized = fsPath.replace(/\\/g, '/');
  const withoutExt = normalized.replace(/((\/|^)index)?\.\w+$/g, '');
  return kebabCase(withoutExt);
}

function getDemoId(cwd, mdFileAbsPath, localId, atomId) {
  const rel = path.relative(cwd, mdFileAbsPath).replace(/\\/g, '/');
  const prefix = atomId || getFileIdFromFsPath(rel);
  return [String(prefix).toLowerCase(), 'demo', String(localId).toLowerCase()]
    .filter(Boolean)
    .join('-');
}

function parseCodeAttrs(attrString) {
  const attrs = {};
  const re = /(\w+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
  let m;
  while ((m = re.exec(attrString))) {
    const key = m[1];
    const val = m[2] ?? m[3] ?? m[4];
    attrs[key] = val === undefined ? true : val;
  }
  return attrs;
}

const CODE_RE = /<code\s+([^>]+)>([\s\S]*?)<\/code>/gi;

function fileToRoute(absFile) {
  const rel = path.relative(DOCS, absFile).replace(/\\/g, '/');
  const noExt = rel.replace(/\.md$/, '');
  if (noExt === 'index') return '/';
  if (noExt.endsWith('/index')) return `/${noExt.slice(0, -6)}`;
  return `/${noExt}`;
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const mdFiles = glob.sync('**/*.md', { cwd: DOCS, absolute: true }).sort();

  const demoImports = new Map();

  for (const mdFile of mdFiles) {
    const raw = fs.readFileSync(mdFile, 'utf8');
    const { data: fm, content } = matter(raw);
    const atomId = fm.atomId;

    CODE_RE.lastIndex = 0;
    let m;
    while ((m = CODE_RE.exec(content))) {
      const attrs = parseCodeAttrs(m[1]);
      if (!attrs.src) continue;
      const resolvedSrc = path.normalize(
        path.resolve(path.dirname(mdFile), attrs.src),
      );
      const baseName = path.parse(
        resolvedSrc.replace(/\\/g, '/').replace(/\/index\.(j|t)sx?$/, ''),
      ).name;
      const localId = attrs.id || baseName;
      const demoId = getDemoId(ROOT, mdFile, String(localId), atomId);
      if (!demoImports.has(demoId)) {
        demoImports.set(demoId, resolvedSrc);
      } else if (demoImports.get(demoId) !== resolvedSrc) {
        console.warn(
          `[docs-manifest] duplicate demo id points to different files: ${demoId}`,
        );
      }
    }
  }

  const loaderLines = [];
  loaderLines.push(`/* eslint-disable */`);
  loaderLines.push(`import type { ComponentType } from 'react';`);
  loaderLines.push(
    `export const demoLoaders: Record<string, () => Promise<{ default: ComponentType<any> }>> = {`,
  );
  for (const [demoId, abs] of demoImports) {
    const relFromGen = path
      .relative(path.join(OUT_DIR), abs)
      .replace(/\\/g, '/')
      .replace(/\.(tsx|ts|jsx|js)$/i, '');
    loaderLines.push(`  '${demoId}': () => import('${relFromGen}'),`);
  }
  loaderLines.push(`};`);
  fs.writeFileSync(path.join(OUT_DIR, 'demoLoaders.ts'), loaderLines.join('\n'));

  const navItems = [];
  for (const mdFile of mdFiles) {
    const raw = fs.readFileSync(mdFile, 'utf8');
    const { data: fm } = matter(raw);
    if (fm.nav === false) continue;
    const route = fileToRoute(mdFile);
    const title = fm.title || path.basename(mdFile, '.md');
    const group = fm.group?.title || '其他';
    const groupOrder = fm.group?.order ?? 100;
    const navOrder = fm.nav?.order ?? fm.order ?? 100;
    navItems.push({
      route,
      title,
      group,
      groupOrder,
      navOrder,
    });
  }

  navItems.sort((a, b) => {
    if (a.groupOrder !== b.groupOrder) return a.groupOrder - b.groupOrder;
    if (a.group !== b.group) return a.group.localeCompare(b.group);
    return a.navOrder - b.navOrder || a.title.localeCompare(b.title);
  });

  const routesLines = [];
  routesLines.push(`/* eslint-disable */`);
  routesLines.push(`import type { ComponentType } from 'react';`);
  routesLines.push(
    `export const docPages: Record<string, () => Promise<{ default: ComponentType<any> }>> = {`,
  );
  for (const mdFile of mdFiles) {
    const route = fileToRoute(mdFile);
    const relToGen = path
      .relative(path.join(OUT_DIR), mdFile)
      .replace(/\\/g, '/');
    routesLines.push(
      `  ${JSON.stringify(route)}: () => import('${relToGen}'),`,
    );
  }
  routesLines.push(`};`);
  routesLines.push('');
  routesLines.push(`export type NavItem = {`);
  routesLines.push(`  route: string;`);
  routesLines.push(`  title: string;`);
  routesLines.push(`  group: string;`);
  routesLines.push(`};`);
  routesLines.push(`export const navItems: NavItem[] = ${JSON.stringify(
    navItems.map(({ route, title, group }) => ({ route, title, group })),
    null,
    2,
  )};`);

  fs.writeFileSync(path.join(OUT_DIR, 'docRoutes.ts'), routesLines.join('\n'));

  console.log(
    `[docs-manifest] ${mdFiles.length} md files, ${demoImports.size} demo loaders`,
  );
}

main();

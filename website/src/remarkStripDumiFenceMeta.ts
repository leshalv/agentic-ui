import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';

/**
 * Dumi 使用 ```lang | pure 等围栏信息；MDX 会把整段 lang 交给解析器，易与内容冲突。
 * 只保留语言段（如 tsx、ts）。
 */
export function remarkStripDumiFenceMeta() {
  return (tree: Root) => {
    visit(tree, 'code', (node: { lang?: string | null }) => {
      if (typeof node.lang === 'string' && node.lang.includes('|')) {
        const [lang] = node.lang.split('|');
        node.lang = lang.trim();
      }
    });
  };
}

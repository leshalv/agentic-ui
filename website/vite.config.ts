import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';

import { remarkStripDumiFenceMeta } from './src/remarkStripDumiFenceMeta';
import { vitePluginDocs } from './src/vitePluginDocs';

const ROOT = path.resolve(__dirname, '..');

export default defineConfig({
  root: __dirname,
  server: {
    port: 8000,
    fs: {
      allow: [ROOT],
    },
  },
  preview: {
    port: 4172,
  },
  build: {
    outDir: path.resolve(ROOT, 'docs-dist'),
    emptyOutDir: true,
  },
  plugins: [
    vitePluginDocs(ROOT),
    mdx({
      remarkPlugins: [remarkStripDumiFenceMeta, remarkGfm],
      include: /[\\/]docs[\\/].*\.md$/,
      format: 'detect',
      // 仅 .markdown 走纯 Markdown；.md 必须在 mdxExtensions 中，否则 @mdx-js/rollup 的 extnames 不含 .md，整份文件不会被编译
      mdExtensions: ['.markdown'],
      mdxExtensions: ['.mdx', '.md'],
    }),
    react({ include: /\.(mdx|md|jsx|tsx|ts|js)$/ }),
  ],
  resolve: {
    alias: {
      '@docs-app': path.resolve(__dirname, 'src'),
      '@ant-design/agentic-ui': path.resolve(ROOT, 'src'),
    },
  },
});

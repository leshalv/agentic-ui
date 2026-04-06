/**
 * Smoke: apply same transform as vitePluginDocs, then compile with @mdx-js/mdx
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileSync } from '@mdx-js/mdx';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const mdPath = path.join(ROOT, 'docs/components/markdownInputField.md');

import { getDemoId } from '../website/src/dumiDemoId.ts';

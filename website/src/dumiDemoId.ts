import path from 'path';

import { kebabCase } from 'lodash-es';

/**
 * Align with dumi `getFileIdFromFsPath`
 * @see node_modules/dumi/dist/utils.js
 */
export function getFileIdFromFsPath(fsPath: string): string {
  const normalized = fsPath.replace(/\\/g, '/');
  const withoutExt = normalized.replace(/((\/|^)index)?\.\w+$/g, '');
  return kebabCase(withoutExt);
}

/**
 * Align with dumi `getCodeId`
 * @see node_modules/dumi/dist/loaders/markdown/transformer/rehypeDemo.js
 */
export function getDemoId(
  cwd: string,
  mdFileAbsPath: string,
  localId: string,
  atomId?: string,
): string {
  const rel = path.relative(cwd, mdFileAbsPath).replace(/\\/g, '/');
  const prefix = atomId || getFileIdFromFsPath(rel);
  return [String(prefix).toLowerCase(), 'demo', String(localId).toLowerCase()]
    .filter(Boolean)
    .join('-');
}

import * as Traverse from '@babel/traverse';
import { SourceLocation } from '@babel/types';

export function normalizeLoc(loc: SourceLocation) {
  return {
    start: [loc.start.line, loc.start.column + 1],
    end: [loc.end.line, loc.end.column + 1],
  };
}

export function getNodeKey(node: any): string {
  const { start, end } = node.loc
    ? normalizeLoc(node.loc as SourceLocation)
    : { start: [0, 0], end: [0, 0] };
  return `${`${node.type}-${start ? start.join(':') : ''}`}-${
    end ? end.join(':') : ''
  }`;
}

export function getNodePath(node: Traverse.NodePath, path = ''): string {
  if (node.parentPath) {
    return getNodePath(
      node.parentPath,
      `${getNodeKey(node.parentPath.node)}${path !== '' ? `.${path}` : ''}`
    );
  }
  return path;
}

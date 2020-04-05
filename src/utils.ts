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
  return (
    node.type + (start ? start.join(':') : '') + (end ? end.join(':') : '')
  );
}

export function getNestedLevel(node: Traverse.NodePath, level = 0): number {
  if (node.scope.path.parentPath) {
    return getNestedLevel(node.scope.path.parentPath, level + 1);
  }
  return level;
}

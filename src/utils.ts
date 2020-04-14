import * as Traverse from '@babel/traverse';
import { SourceLocation } from '@babel/types';
import { NormalizedNode } from './types';

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

export function accessNode(nodes: NormalizedNode[]): Function {
  const getNodeByKeyCache: Record<string, NormalizedNode> = {};
  return (key: string): NormalizedNode | undefined => {
    if (getNodeByKeyCache[key]) return getNodeByKeyCache[key];
    const found = nodes.find(n => n.key === key);
    if (found) {
      getNodeByKeyCache[key] = found;
    }
    return found;
  };
}

export function pathToTypes(p: string): string[] {
  return p.split('.').map(k => k.substr(0, k.indexOf('-')));
}

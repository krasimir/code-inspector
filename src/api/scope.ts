import { NormalizedNode } from '../types';

const getScopeNodeKey = (node: NormalizedNode): string =>
  node.type +
  node.text +
  (node.start ? node.start.join(':') : '') +
  (node.end ? node.end.join(':') : '');

const NODE_TYPES_TO_IGNORE: Record<string, boolean> = {
  Program: true,
  BlockStatement: true,
  ObjectPattern: true,
};

export default function filterToScopeNodes(
  nodes: NormalizedNode[]
): NormalizedNode[] {
  const registered: Record<string, boolean> = {};
  const { filtered } = nodes.reduce(
    (res, node) => {
      const key = getScopeNodeKey(node);
      if (!registered[key]) {
        registered[key] = true;
        if (!NODE_TYPES_TO_IGNORE[node.type]) res.filtered.push(node);
      }
      return res;
    },
    {
      filtered: [] as NormalizedNode[],
      last: { type: '', text: '' } as NormalizedNode,
    }
  );
  return filtered;
}

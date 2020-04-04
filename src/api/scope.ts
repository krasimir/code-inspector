import { NormalizedNode } from '../types';

const NO_KEY = 'no-key';

const NODE_TYPES_TO_IGNORE: Record<string, boolean> = {
  Program: true,
  BlockStatement: true,
  ObjectPattern: true,
  AssignmentPattern: true,
};

export default function filterToScopeNodes(
  nodes: NormalizedNode[]
): NormalizedNode[] {
  const registered: Record<string, boolean> = {};
  const { filtered } = nodes.reduce(
    (res, node) => {
      if (!registered[node.key || NO_KEY]) {
        registered[node.key || NO_KEY] = true;
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

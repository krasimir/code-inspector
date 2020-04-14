import { NormalizedNode } from './types';

export default function(nodes: NormalizedNode[]): NormalizedNode[] {
  const consumed: Record<string, boolean> = {};
  // console.log(nodes);
  return (
    nodes
      // removing duplicates
      .filter(node => {
        if (!consumed[node.key || '']) {
          consumed[node.key || ''] = true;
          return true;
        }
        return false;
      })
      // sorting
      .sort((a, b) => {
        if (a.start[0] === b.start[0]) {
          if (a.start[1] > b.start[1]) {
            return 1;
          }
          if (a.start[1] === b.start[1]) {
            return a.end[0] > b.end[0] ? -1 : 1;
          }
          return -1;
        }
        if (a.start[0] > b.start[0]) {
          return 1;
        }
        return -1;
      })
  );
}

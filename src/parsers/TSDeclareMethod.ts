import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSDeclareMethod,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSDeclareMethod',
    text: 'TSDeclareMethod',
    ...helpers.normalizeLoc(node.loc),
  };
}

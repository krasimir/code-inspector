import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.InferredPredicate,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'InferredPredicate',
    text: 'InferredPredicate',
    ...helpers.normalizeLoc(node.loc),
  };
}

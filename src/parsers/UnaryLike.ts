import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.UnaryLike,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'UnaryLike',
    text: 'UnaryLike',
    ...helpers.normalizeLoc(node.loc),
  };
}

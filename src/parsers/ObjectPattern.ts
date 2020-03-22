import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectPattern,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ObjectPattern',
    text: 'ObjectPattern',
    ...helpers.normalizeLoc(node.loc),
  };
}

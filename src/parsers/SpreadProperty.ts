import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.SpreadProperty,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'SpreadProperty',
    text: 'SpreadProperty',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ThrowStatement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ThrowStatement',
    text: 'ThrowStatement',
    ...helpers.normalizeLoc(node.loc),
  };
}

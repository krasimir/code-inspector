import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXSpreadChild,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'JSXSpreadChild',
    text: 'JSXSpreadChild',
    ...helpers.normalizeLoc(node.loc),
  };
}

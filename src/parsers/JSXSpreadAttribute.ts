import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXSpreadAttribute,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'JSXSpreadAttribute',
    text: 'JSXSpreadAttribute',
    ...helpers.normalizeLoc(node.loc),
  };
}

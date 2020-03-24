import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXSpreadAttribute,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'JSXSpreadAttribute',
    text: `...${helpers.parse(node.argument).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}

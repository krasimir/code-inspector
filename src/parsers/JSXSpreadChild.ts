import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXSpreadChild,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'JSXSpreadChild',
    text: `...${helpers.parse(node.expression).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}

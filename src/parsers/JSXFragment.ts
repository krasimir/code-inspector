import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXFragment,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'JSXFragment',
    text:
      helpers.parse(node.openingFragment).text +
      (node.closingFragment ? helpers.parse(node.closingFragment).text : ''),
    ...helpers.normalizeLoc(node.loc),
  };
}

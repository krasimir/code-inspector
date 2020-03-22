import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXEmptyExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'JSXEmptyExpression',
    text: 'JSXEmptyExpression',
    ...helpers.normalizeLoc(node.loc),
  };
}

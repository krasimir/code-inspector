import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXMemberExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'JSXMemberExpression',
    text: 'JSXMemberExpression',
    ...helpers.normalizeLoc(node.loc),
  };
}

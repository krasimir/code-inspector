import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.UnaryExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'UnaryExpression',
    text: node.operator + helpers.parse(node.argument).text,
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.BinaryExpression,
  helpers: ParserHelpers
): NormalizedNode {
  const l = helpers.parse(node.left).text;
  const r = helpers.parse(node.right).text;
  return {
    type: 'BinaryExpression',
    left: l,
    right: r,
    text: `${l} ${node.operator} ${r}`,
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.BinaryExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'BinaryExpression',
    left: helpers.parse(node.left).text,
    right: helpers.parse(node.right).text,
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

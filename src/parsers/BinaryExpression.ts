import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.BinaryExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'BinaryExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TypeCastExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TypeCastExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.NumericLiteral,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'NumericLiteral',
    text: node.value,
    ...helpers.normalizeLoc(node.loc),
  };
}

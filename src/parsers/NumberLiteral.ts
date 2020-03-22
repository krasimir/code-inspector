import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.NumberLiteral,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'NumberLiteral',
    text: node.value,
    ...helpers.normalizeLoc(node.loc),
  };
}

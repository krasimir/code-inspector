import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.BigIntLiteral,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'BigIntLiteral',
    text: node.value,
    ...helpers.normalizeLoc(node.loc),
  };
}

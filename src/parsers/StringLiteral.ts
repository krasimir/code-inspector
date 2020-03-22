import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.StringLiteral,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'StringLiteral',
    text: node.value,
    ...helpers.normalizeLoc(node.loc),
  };
}

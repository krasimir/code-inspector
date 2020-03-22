import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.BooleanLiteral,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'BooleanLiteral',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

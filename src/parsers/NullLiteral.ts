import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.NullLiteral,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'NullLiteral',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

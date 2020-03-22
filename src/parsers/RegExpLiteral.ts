import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.RegExpLiteral,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'RegExpLiteral',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

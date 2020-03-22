import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.RegexLiteral,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'RegexLiteral',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

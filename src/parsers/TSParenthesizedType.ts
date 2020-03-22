import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSParenthesizedType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSParenthesizedType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

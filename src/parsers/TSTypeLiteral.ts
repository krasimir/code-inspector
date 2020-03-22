import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeLiteral,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSTypeLiteral',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

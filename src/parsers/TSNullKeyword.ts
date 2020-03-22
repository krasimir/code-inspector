import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSNullKeyword,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSNullKeyword',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

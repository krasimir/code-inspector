import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSNeverKeyword,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSNeverKeyword',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

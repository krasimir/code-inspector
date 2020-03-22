import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSBigIntKeyword,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSBigIntKeyword',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

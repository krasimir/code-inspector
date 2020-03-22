import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSUndefinedKeyword,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSUndefinedKeyword',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

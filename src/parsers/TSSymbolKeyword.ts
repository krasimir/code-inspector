import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSSymbolKeyword,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSSymbolKeyword',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

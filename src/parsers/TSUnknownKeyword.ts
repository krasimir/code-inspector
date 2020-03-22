import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSUnknownKeyword,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSUnknownKeyword',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

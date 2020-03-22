import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSObjectKeyword,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSObjectKeyword',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

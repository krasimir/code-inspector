import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSNumberKeyword,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSNumberKeyword',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

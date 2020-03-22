import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSAnyKeyword,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSAnyKeyword',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

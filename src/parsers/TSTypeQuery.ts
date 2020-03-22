import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeQuery,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSTypeQuery',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

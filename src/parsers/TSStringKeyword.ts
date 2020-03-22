import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSStringKeyword,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSStringKeyword',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

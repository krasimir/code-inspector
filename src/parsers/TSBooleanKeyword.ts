import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSBooleanKeyword,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSBooleanKeyword',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypePredicate,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSTypePredicate',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

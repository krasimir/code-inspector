import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.InferredPredicate,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'InferredPredicate',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

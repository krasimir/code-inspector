import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FlowPredicate,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'FlowPredicate',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

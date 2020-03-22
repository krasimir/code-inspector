import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.SequenceExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'SequenceExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

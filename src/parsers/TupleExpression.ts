import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TupleExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TupleExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

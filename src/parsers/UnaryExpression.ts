import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.UnaryExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'UnaryExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

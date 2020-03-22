import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.YieldExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'YieldExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

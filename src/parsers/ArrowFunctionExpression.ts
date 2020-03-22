import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ArrowFunctionExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ArrowFunctionExpression',
    text: 'ƒ',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FunctionExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'FunctionExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

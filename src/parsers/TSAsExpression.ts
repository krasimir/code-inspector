import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSAsExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSAsExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

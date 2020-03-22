import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSNonNullExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSNonNullExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

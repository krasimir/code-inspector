import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ParenthesizedExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ParenthesizedExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

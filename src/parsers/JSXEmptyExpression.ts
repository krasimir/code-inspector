import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXEmptyExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'JSXEmptyExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

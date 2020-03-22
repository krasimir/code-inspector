import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ObjectExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

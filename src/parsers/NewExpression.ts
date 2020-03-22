import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.NewExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'NewExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

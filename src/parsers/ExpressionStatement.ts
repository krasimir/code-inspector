import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExpressionStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ExpressionStatement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

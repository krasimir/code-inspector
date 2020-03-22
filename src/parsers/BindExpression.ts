import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.BindExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'BindExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

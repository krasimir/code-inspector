import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ClassExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ClassExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

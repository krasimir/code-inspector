import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ThisExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ThisExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

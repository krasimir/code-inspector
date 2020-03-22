import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DoExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DoExpression',
    text: 'do',
    ...helpers.normalizeLoc(node.loc),
  };
}

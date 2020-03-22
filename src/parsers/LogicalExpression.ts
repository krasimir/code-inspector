import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.LogicalExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'LogicalExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

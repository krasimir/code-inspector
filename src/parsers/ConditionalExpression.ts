import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ConditionalExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ConditionalExpression',
    text: helpers.parse(node.test).text,
    ...helpers.normalizeLoc(node.loc),
  };
}

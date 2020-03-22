import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.AssignmentExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'AssignmentExpression',
    left: helpers.parse(node.left).text,
    right: helpers.parse(node.right).text,
    text: '=',
    ...helpers.normalizeLoc(node.loc),
  };
}

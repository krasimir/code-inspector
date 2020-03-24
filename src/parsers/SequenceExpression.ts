import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.SequenceExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'SequenceExpression',
    text: node.expressions.map(e => helpers.parse(e).text).join(', '),
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSAsExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSAsExpression',
    text: 'TSAsExpression',
    ...helpers.normalizeLoc(node.loc),
  };
}

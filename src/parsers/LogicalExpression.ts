import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.LogicalExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'LogicalExpression',
    text: 'LogicalExpression',
    ...helpers.normalizeLoc(node.loc),
  };
}

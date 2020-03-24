import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.LogicalExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'LogicalExpression',
    text: `${helpers.parse(node.left).text} ${node.operator} ${
      helpers.parse(node.right).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}

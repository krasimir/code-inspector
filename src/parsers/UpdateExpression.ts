import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.UpdateExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'UpdateExpression',
    text: node.operator,
    ...helpers.normalizeLoc(node.loc),
  };
}

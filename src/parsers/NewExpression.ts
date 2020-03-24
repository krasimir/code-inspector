import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.NewExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'NewExpression',
    text: `new ${helpers.parse(node.callee).text}(${
      node.arguments.length > 0 ? `…${node.arguments.length}` : ''
    })`,
    ...helpers.normalizeLoc(node.loc),
  };
}

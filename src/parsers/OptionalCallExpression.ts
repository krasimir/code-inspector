import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.OptionalCallExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'OptionalCallExpression',
    text: `${helpers.parse(node.callee).text}?.(${
      node.arguments.length > 0 ? `…${node.arguments.length}` : ''
    })`,
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ThrowStatement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ThrowStatement',
    text: `throw ${helpers.parse(node.argument).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}

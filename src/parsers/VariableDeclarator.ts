import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.VariableDeclarator,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'VariableDeclarator',
    text: helpers.parse(node.id).text,
    ...helpers.normalizeLoc(node.loc),
    meta: helpers.parse(node.id).text,
  };
}

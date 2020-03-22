import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ReturnStatement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ReturnStatement',
    text: `← ${helpers.parse(node.argument).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.WhileStatement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'WhileStatement',
    text: 'WhileStatement',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.WhileStatement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'WhileStatement',
    text: `while(${helpers.parse(node.test).text})`,
    ...helpers.normalizeLoc(node.loc),
  };
}

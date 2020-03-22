import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.IfStatement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'IfStatement',
    text: `if (${helpers.parse(node.test).text})`,
    ...helpers.normalizeLoc(node.loc),
  };
}

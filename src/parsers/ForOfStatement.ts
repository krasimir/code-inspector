import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ForOfStatement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ForOfStatement',
    text: 'ForOfStatement',
    ...helpers.normalizeLoc(node.loc),
  };
}

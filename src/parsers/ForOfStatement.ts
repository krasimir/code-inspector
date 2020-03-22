import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ForOfStatement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ForOfStatement',
    text: `${helpers.parse(node.left).text} of ${
      helpers.parse(node.right).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}

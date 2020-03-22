import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ForInStatement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ForInStatement',
    text: `${helpers.parse(node.left).text} in ${
      helpers.parse(node.right).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}

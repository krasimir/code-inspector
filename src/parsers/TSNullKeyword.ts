import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSNullKeyword,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSNullKeyword',
    text: 'null',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSUnknownKeyword,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSUnknownKeyword',
    text: 'unknown',
    ...helpers.normalizeLoc(node.loc),
  };
}

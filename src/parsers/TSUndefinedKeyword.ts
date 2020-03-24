import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSUndefinedKeyword,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSUndefinedKeyword',
    text: 'undefined',
    ...helpers.normalizeLoc(node.loc),
  };
}

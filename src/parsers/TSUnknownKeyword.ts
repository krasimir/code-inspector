import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSUnknownKeyword,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSUnknownKeyword',
    text: 'TSUnknownKeyword',
    ...helpers.normalizeLoc(node.loc),
  };
}

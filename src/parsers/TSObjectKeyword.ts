import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSObjectKeyword,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSObjectKeyword',
    text: 'TSObjectKeyword',
    ...helpers.normalizeLoc(node.loc),
  };
}

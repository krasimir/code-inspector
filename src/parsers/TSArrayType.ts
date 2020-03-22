import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSArrayType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSArrayType',
    text: 'TSArrayType',
    ...helpers.normalizeLoc(node.loc),
  };
}

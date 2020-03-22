import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSIndexedAccessType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSIndexedAccessType',
    text: 'TSIndexedAccessType',
    ...helpers.normalizeLoc(node.loc),
  };
}

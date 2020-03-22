import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSIndexSignature,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSIndexSignature',
    text: 'TSIndexSignature',
    ...helpers.normalizeLoc(node.loc),
  };
}

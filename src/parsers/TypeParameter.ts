import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TypeParameter,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TypeParameter',
    text: 'TypeParameter',
    ...helpers.normalizeLoc(node.loc),
  };
}

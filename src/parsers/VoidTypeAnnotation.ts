import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.VoidTypeAnnotation,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'VoidTypeAnnotation',
    text: 'VoidTypeAnnotation',
    ...helpers.normalizeLoc(node.loc),
  };
}

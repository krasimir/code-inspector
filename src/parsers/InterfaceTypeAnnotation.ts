import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.InterfaceTypeAnnotation,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'InterfaceTypeAnnotation',
    text: 'InterfaceTypeAnnotation',
    ...helpers.normalizeLoc(node.loc),
  };
}

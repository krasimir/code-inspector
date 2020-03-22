import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.UnionTypeAnnotation,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'UnionTypeAnnotation',
    text: 'UnionTypeAnnotation',
    ...helpers.normalizeLoc(node.loc),
  };
}

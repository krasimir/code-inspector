import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.NullableTypeAnnotation,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'NullableTypeAnnotation',
    text: 'NullableTypeAnnotation',
    ...helpers.normalizeLoc(node.loc),
  };
}

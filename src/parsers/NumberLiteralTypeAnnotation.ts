import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.NumberLiteralTypeAnnotation,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'NumberLiteralTypeAnnotation',
    text: 'NumberLiteralTypeAnnotation',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.StringLiteralTypeAnnotation,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'StringLiteralTypeAnnotation',
    text: 'StringLiteralTypeAnnotation',
    ...helpers.normalizeLoc(node.loc),
  };
}

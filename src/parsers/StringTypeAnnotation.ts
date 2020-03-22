import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.StringTypeAnnotation,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'StringTypeAnnotation',
    text: 'StringTypeAnnotation',
    ...helpers.normalizeLoc(node.loc),
  };
}

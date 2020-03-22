import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.GenericTypeAnnotation,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'GenericTypeAnnotation',
    text: 'GenericTypeAnnotation',
    ...helpers.normalizeLoc(node.loc),
  };
}

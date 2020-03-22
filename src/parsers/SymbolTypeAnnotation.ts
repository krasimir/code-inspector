import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.SymbolTypeAnnotation,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'SymbolTypeAnnotation',
    text: 'SymbolTypeAnnotation',
    ...helpers.normalizeLoc(node.loc),
  };
}

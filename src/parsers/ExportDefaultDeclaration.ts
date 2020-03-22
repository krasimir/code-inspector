import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportDefaultDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ExportDefaultDeclaration',
    text: 'ExportDefaultDeclaration',
    ...helpers.normalizeLoc(node.loc),
  };
}

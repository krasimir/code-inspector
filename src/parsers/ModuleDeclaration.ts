import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ModuleDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ModuleDeclaration',
    text: 'ModuleDeclaration',
    ...helpers.normalizeLoc(node.loc),
  };
}

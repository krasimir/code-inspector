import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSModuleDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSModuleDeclaration',
    text: 'TSModuleDeclaration',
    ...helpers.normalizeLoc(node.loc),
  };
}

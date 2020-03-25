import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSModuleDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSModuleDeclaration',
    text: `declare module ${helpers.parse(node.id).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}

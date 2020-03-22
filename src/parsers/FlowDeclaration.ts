import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FlowDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'FlowDeclaration',
    text: 'FlowDeclaration',
    ...helpers.normalizeLoc(node.loc),
  };
}

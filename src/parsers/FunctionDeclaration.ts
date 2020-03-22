import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FunctionDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'FunctionDeclaration',
    text: `${helpers.parse(node.id).text}(${node.params
      .map(p => helpers.parse(p).text)
      .join(', ')})`,
    ...helpers.normalizeLoc(node.loc),
  };
}

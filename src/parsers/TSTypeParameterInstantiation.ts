import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeParameterInstantiation,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSTypeParameterInstantiation',
    text: 'TSTypeParameterInstantiation',
    ...helpers.normalizeLoc(node.loc),
  };
}

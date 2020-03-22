import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TypeParameterInstantiation,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TypeParameterInstantiation',
    text: 'TypeParameterInstantiation',
    ...helpers.normalizeLoc(node.loc),
  };
}

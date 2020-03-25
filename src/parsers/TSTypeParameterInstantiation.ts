import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeParameterInstantiation,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSTypeParameterInstantiation',
    text: `<${helpers.parseItems(node.params)}>`,
    ...helpers.normalizeLoc(node.loc),
  };
}

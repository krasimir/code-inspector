import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Program,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'Program',
    text: 'Program',
    ...helpers.normalizeLoc(node.loc),
  };
}

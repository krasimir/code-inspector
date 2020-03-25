import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSUnionType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSUnionType',
    text: helpers.parseItems(node.types, parent, grandParent, ' |'),
    ...helpers.normalizeLoc(node.loc),
  };
}

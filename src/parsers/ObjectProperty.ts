import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectProperty,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ObjectProperty',
    text: helpers.parse(node.key).text,
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectPattern,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ObjectPattern',
    text: `{${node.properties.map(n => helpers.parse(n).text).join(', ')}}`,
    ...helpers.normalizeLoc(node.loc),
  };
}

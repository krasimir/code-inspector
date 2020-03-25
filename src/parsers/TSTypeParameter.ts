import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeParameter,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  const constrain = node.constraint
    ? ` in ${helpers.parse(node.constraint).text}`
    : '';
  return {
    type: 'TSTypeParameter',
    text: node.name + constrain,
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeQuery,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSTypeQuery',
    text: helpers.parse(node.exprName).text,
    ...helpers.normalizeLoc(node.loc),
  };
}

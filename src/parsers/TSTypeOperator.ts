import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeOperator,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSTypeOperator',
    text: 'TSTypeOperator',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FunctionParent,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'FunctionParent',
    text: 'FunctionParent',
    ...helpers.normalizeLoc(node.loc),
  };
}

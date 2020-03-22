import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSFunctionType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSFunctionType',
    text: 'TSFunctionType',
    ...helpers.normalizeLoc(node.loc),
  };
}

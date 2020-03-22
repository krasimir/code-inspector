import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSModuleBlock,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSModuleBlock',
    text: 'TSModuleBlock',
    ...helpers.normalizeLoc(node.loc),
  };
}

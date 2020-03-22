import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSPropertySignature,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSPropertySignature',
    text: 'TSPropertySignature',
    ...helpers.normalizeLoc(node.loc),
  };
}

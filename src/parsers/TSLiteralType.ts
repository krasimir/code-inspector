import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSLiteralType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSLiteralType',
    text: 'TSLiteralType',
    ...helpers.normalizeLoc(node.loc),
  };
}

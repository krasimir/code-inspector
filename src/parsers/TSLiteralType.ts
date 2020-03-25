import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSLiteralType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSLiteralType',
    text: helpers.parse(node.literal).text,
    ...helpers.normalizeLoc(node.loc),
  };
}

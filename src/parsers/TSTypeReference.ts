import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeReference,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSTypeReference',
    text: helpers.parse(node.typeName).text,
    ...helpers.normalizeLoc(node.loc),
  };
}

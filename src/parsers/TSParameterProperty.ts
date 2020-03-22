import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSParameterProperty,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSParameterProperty',
    text: 'TSParameterProperty',
    ...helpers.normalizeLoc(node.loc),
  };
}

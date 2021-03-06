import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.InterfaceExtends,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'InterfaceExtends',
    text: 'InterfaceExtends',
    ...helpers.normalizeLoc(node.loc),
  };
}

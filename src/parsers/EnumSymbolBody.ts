import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumSymbolBody,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'EnumSymbolBody',
    text: 'EnumSymbolBody',
    ...helpers.normalizeLoc(node.loc),
  };
}

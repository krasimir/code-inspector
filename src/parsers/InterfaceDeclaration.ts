import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.InterfaceDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'InterfaceDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

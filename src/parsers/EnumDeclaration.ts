import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.EnumDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'EnumDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

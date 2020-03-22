import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeParameterDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSTypeParameterDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

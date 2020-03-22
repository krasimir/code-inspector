import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TypeParameterDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TypeParameterDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSEnumDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSEnumDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

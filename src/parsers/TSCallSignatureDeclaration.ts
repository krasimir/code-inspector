import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSCallSignatureDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSCallSignatureDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

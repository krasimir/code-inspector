import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSConstructSignatureDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSConstructSignatureDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

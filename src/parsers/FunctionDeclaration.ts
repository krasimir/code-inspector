import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FunctionDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'FunctionDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

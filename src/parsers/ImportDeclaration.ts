import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ImportDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ImportDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

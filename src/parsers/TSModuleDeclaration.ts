import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSModuleDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSModuleDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

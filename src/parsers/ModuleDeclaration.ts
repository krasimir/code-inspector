import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ModuleDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ModuleDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

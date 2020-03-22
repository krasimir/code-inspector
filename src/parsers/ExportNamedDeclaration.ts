import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportNamedDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ExportNamedDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

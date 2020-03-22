import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ExportDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

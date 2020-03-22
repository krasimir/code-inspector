import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportDefaultDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ExportDefaultDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

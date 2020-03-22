import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportNamespaceSpecifier,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ExportNamespaceSpecifier',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportSpecifier,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ExportSpecifier',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

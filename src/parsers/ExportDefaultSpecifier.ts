import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportDefaultSpecifier,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ExportDefaultSpecifier',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

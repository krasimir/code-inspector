import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSExportAssignment,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSExportAssignment',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSImportType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSImportType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

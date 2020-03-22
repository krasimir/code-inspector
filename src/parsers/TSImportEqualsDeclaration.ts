import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSImportEqualsDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSImportEqualsDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

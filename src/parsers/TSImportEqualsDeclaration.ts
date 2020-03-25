import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSImportEqualsDeclaration,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSImportEqualsDeclaration',
    text: `${helpers.parse(node.id).text} ⤺ ${
      helpers.parse(node.moduleReference).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}

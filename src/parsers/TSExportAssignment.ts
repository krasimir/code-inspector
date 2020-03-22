import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSExportAssignment,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSExportAssignment',
    text: 'TSExportAssignment',
    ...helpers.normalizeLoc(node.loc),
  };
}

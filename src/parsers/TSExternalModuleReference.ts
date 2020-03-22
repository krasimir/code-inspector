import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSExternalModuleReference,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSExternalModuleReference',
    text: 'TSExternalModuleReference',
    ...helpers.normalizeLoc(node.loc),
  };
}

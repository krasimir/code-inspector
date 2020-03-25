import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSExternalModuleReference,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSExternalModuleReference',
    text: helpers.parse(node.expression).text,
    ...helpers.normalizeLoc(node.loc),
  };
}

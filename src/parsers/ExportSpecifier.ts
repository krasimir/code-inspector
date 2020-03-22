import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportSpecifier,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ExportSpecifier',
    text: 'ExportSpecifier',
    ...helpers.normalizeLoc(node.loc),
  };
}

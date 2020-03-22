import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportDefaultSpecifier,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ExportDefaultSpecifier',
    text: `↗ ${helpers.parse(node.exported).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}

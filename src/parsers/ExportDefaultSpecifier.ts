import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExportDefaultSpecifier,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ExportDefaultSpecifier',
    text: 'ExportDefaultSpecifier',
    ...helpers.normalizeLoc(node.loc),
  };
}

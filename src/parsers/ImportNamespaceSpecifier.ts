import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ImportNamespaceSpecifier,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ImportNamespaceSpecifier',
    text: 'ImportNamespaceSpecifier',
    ...helpers.normalizeLoc(node.loc),
  };
}

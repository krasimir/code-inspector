import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ImportNamespaceSpecifier,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ImportNamespaceSpecifier',
    text: `${helpers.parse(node.local).text}${
      parent && parent.type === 'ImportDeclaration'
        ? ` ⤺ ${helpers.parse(parent.source).text}`
        : ''
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}

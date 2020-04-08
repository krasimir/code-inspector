import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ImportDefaultSpecifier,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  const imported = helpers.parse(node.local).text;
  return {
    type: 'ImportDefaultSpecifier',
    text: `${imported}${
      parent && parent.type === 'ImportDeclaration'
        ? ` ⤺ ${helpers.parse(parent.source).text}`
        : ''
    }`,
    ...helpers.normalizeLoc(node.loc),
    meta: imported,
  };
}

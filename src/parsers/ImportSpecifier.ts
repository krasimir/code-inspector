import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ImportSpecifier,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ImportSpecifier',
    text: `${helpers.parse(node.imported).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ImportDefaultSpecifier,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'ImportDefaultSpecifier',
    text: 'ImportDefaultSpecifier',
    ...helpers.normalizeLoc(node.loc),
  };
}

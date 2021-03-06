import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeElement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'TSTypeElement',
    text: 'TSTypeElement',
    ...helpers.normalizeLoc(node.loc),
  };
}

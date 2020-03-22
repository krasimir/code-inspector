import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.OptionalMemberExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'OptionalMemberExpression',
    text: 'OptionalMemberExpression',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.RecordExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'RecordExpression',
    text: 'RecordExpression',
    ...helpers.normalizeLoc(node.loc),
  };
}

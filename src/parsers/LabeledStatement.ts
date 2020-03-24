import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.LabeledStatement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'LabeledStatement',
    text: `${helpers.parse(node.label).text}:`,
    ...helpers.normalizeLoc(node.loc),
  };
}

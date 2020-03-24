import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.OptionalMemberExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'OptionalMemberExpression',
    text: `${helpers.parse(node.object).text}?.${
      helpers.parse(node.property).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}

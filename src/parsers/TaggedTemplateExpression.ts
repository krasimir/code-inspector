import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TaggedTemplateExpression,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TaggedTemplateExpression',
    text: `${helpers.parse(node.tag).text}\`...\``,
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXAttribute,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'JSXAttribute',
    text: `${helpers.parse(node.name).text}=${helpers.parse(node.value).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}

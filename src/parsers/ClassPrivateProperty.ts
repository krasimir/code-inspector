import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ClassPrivateProperty,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'ClassPrivateProperty',
    text: `${grandParent ? `${helpers.parse(grandParent).text}.` : ''}${
      helpers.parse(node.key).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}

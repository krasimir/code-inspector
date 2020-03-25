import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSParameterProperty,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSParameterProperty',
    text: `${node.accessibility ? `${node.accessibility} ` : ''}${
      helpers.parse(node.parameter).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}

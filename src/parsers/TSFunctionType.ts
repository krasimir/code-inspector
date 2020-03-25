import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSFunctionType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSFunctionType',
    text: `ƒ(${helpers.parseItems(node.parameters)}${
      helpers.parse(node.typeAnnotation).text
    })`,
    ...helpers.normalizeLoc(node.loc),
  };
}

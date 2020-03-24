/* eslint-disable no-nested-ternary */
import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSDeclareMethod,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSDeclareMethod',
    text: `${
      !node.accessibility ? (node.static ? 'static' : '') : node.accessibility
    } ${helpers.parse(node.key).text}(${helpers.parseFunctionParameters(
      node.params
    )})`,
    ...helpers.normalizeLoc(node.loc),
  };
}

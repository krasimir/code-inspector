import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.AssignmentPattern,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'AssignmentPattern',
    left: helpers.parse(node.left).text,
    right: helpers.parse(node.right).text,
    text: '=',
    ...helpers.normalizeLoc(node.loc),
  };
}

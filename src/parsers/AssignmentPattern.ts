import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.AssignmentPattern,
  helpers: ParserHelpers
): NormalizedNode {
  const left = helpers.parse(node.left).text;
  const right = helpers.parse(node.right).text;
  return {
    type: 'AssignmentPattern',
    left,
    right,
    text: `${left}=${right}`,
    ...helpers.normalizeLoc(node.loc),
  };
}

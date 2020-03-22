import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.AwaitExpression,
  helpers: ParserHelpers
): NormalizedNode {
  const argument = helpers.parse(node.argument);
  return {
    type: 'AwaitExpression',
    text: `🕒 ${argument.text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}

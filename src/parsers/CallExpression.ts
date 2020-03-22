import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.CallExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'CallExpression',
    text: `${helpers.parse(node.callee).text}(${
      node.arguments.length > 0 ? '…' : ''
    })`,
    ...helpers.normalizeLoc(node.loc),
  };
}

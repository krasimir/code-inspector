import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ArrayExpression,
  { normalizeLoc }: ParserHelpers
): NormalizedNode | undefined {
  return {
    type: 'ArrayExpression',
    text: '[]',
    ...normalizeLoc(node.loc),
  };
}

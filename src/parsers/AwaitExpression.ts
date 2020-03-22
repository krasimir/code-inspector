import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.AwaitExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'AwaitExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

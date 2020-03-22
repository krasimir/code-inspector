import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.OptionalCallExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'OptionalCallExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

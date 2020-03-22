import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.OptionalMemberExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'OptionalMemberExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXMemberExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'JSXMemberExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

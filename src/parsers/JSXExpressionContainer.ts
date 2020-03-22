import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.JSXExpressionContainer,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'JSXExpressionContainer',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

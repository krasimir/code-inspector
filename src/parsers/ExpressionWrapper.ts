import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ExpressionWrapper,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ExpressionWrapper',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

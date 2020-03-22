import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.CallExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'CallExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

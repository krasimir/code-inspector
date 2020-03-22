import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FunctionParent,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'FunctionParent',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

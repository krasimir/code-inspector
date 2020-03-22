import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSFunctionType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSFunctionType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

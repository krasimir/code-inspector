import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FunctionTypeParam,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'FunctionTypeParam',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSInferType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSInferType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

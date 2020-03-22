import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSPropertySignature,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSPropertySignature',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

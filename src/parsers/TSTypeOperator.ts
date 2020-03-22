import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeOperator,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSTypeOperator',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

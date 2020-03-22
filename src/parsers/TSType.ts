import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

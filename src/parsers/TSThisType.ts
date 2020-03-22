import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSThisType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSThisType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

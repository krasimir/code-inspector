import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSEnumMember,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSEnumMember',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

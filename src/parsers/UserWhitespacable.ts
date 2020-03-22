import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.UserWhitespacable,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'UserWhitespacable',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

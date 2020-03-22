import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ObjectMember,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ObjectMember',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSUnionType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSUnionType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

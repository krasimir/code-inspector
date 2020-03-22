import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSDeclareFunction,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSDeclareFunction',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

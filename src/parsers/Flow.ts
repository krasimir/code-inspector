import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Flow,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Flow',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

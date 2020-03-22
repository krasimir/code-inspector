import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Private,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Private',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

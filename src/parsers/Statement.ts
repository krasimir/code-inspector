import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Statement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Statement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

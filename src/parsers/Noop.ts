import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Noop,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Noop',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

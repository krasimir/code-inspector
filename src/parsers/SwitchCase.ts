import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.SwitchCase,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'SwitchCase',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

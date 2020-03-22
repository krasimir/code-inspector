import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.SwitchStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'SwitchStatement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

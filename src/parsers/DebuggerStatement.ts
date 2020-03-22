import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DebuggerStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DebuggerStatement',
    text: 'debugger',
    ...helpers.normalizeLoc(node.loc),
  };
}

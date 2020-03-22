import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.IfStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'IfStatement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

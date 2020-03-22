import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.VariableDeclarator,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'VariableDeclarator',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

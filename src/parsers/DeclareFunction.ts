import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DeclareFunction,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DeclareFunction',
    text: 'DeclareFunction',
    ...helpers.normalizeLoc(node.loc),
  };
}

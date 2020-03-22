import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DeclareModule,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DeclareModule',
    text: 'DeclareModule',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DeclareModule,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DeclareModule',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DeclareTypeAlias,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DeclareTypeAlias',
    text: 'DeclareTypeAlias',
    ...helpers.normalizeLoc(node.loc),
  };
}

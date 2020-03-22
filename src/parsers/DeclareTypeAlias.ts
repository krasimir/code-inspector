import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DeclareTypeAlias,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DeclareTypeAlias',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

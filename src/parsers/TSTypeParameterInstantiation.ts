import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSTypeParameterInstantiation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSTypeParameterInstantiation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

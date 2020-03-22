import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TypeParameterInstantiation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TypeParameterInstantiation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

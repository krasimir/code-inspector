import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.InterfaceTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'InterfaceTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

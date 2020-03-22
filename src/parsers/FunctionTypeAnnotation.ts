import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FunctionTypeAnnotation,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'FunctionTypeAnnotation',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

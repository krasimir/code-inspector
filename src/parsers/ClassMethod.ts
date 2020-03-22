import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ClassMethod,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ClassMethod',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

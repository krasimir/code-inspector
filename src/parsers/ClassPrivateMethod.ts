import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ClassPrivateMethod,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ClassPrivateMethod',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

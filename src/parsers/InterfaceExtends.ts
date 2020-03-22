import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.InterfaceExtends,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'InterfaceExtends',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

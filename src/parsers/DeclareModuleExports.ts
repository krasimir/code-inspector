import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DeclareModuleExports,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DeclareModuleExports',
    text: 'DeclareModuleExports',
    ...helpers.normalizeLoc(node.loc),
  };
}

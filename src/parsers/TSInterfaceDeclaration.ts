import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSInterfaceDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSInterfaceDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

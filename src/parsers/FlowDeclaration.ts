import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.FlowDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'FlowDeclaration',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

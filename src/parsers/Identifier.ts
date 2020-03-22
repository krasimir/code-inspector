import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Identifier,
  { normalizeLoc }: ParserHelpers
): NormalizedNode {
  return {
    type: 'Identifier',
    text: node.name,
    ...normalizeLoc(node.loc),
  };
}

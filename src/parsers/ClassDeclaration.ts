import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ClassDeclaration,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ClassDeclaration',
    text: helpers.parse(node.id).text,
    ...helpers.normalizeLoc(node.loc),
  };
}

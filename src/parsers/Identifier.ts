import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Identifier,
  helpers: ParserHelpers
): NormalizedNode {
  const typeScriptAnnotation: string = node.typeAnnotation
    ? helpers.parse(node.typeAnnotation).text
    : '';
  return {
    type: 'Identifier',
    text: node.name,
    ...helpers.normalizeLoc(node.loc),
    meta: {
      isOptional: node.optional,
      typeAnnotation: typeScriptAnnotation,
    },
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Identifier,
  helpers: ParserHelpers
): NormalizedNode {
  const typeScriptAnnotation: string = node.typeAnnotation
    ? helpers.parse(node.typeAnnotation).text
    : '';
  const meta =
    typeof node.optional !== 'undefined' &&
    typeof node.typeAnnotation !== 'undefined'
      ? {
          isOptional: !!node.optional,
          typeAnnotation: helpers.parse(node.typeAnnotation).text,
        }
      : null;
  return {
    type: 'Identifier',
    text: node.name,
    ...helpers.normalizeLoc(node.loc),
    meta,
  };
}

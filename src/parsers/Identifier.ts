import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Identifier,
  helpers: ParserHelpers
): NormalizedNode {
  const typeScriptAnnotation: string = node.typeAnnotation
    ? helpers.parse(node.typeAnnotation).text
    : '';
  const typeScriptOptional: string = node.optional ? '?' : '';
  return {
    type: 'Identifier',
    text: node.name + typeScriptOptional + typeScriptAnnotation,
    ...helpers.normalizeLoc(node.loc),
  };
}

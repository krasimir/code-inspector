import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TemplateLiteral,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TemplateLiteral',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

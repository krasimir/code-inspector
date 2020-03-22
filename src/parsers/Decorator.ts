import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.Decorator,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'Decorator',
    text: `@${helpers.parse(node.expression).text}`,
    ...helpers.normalizeLoc(node.loc),
  };
}

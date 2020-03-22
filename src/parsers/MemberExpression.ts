import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.MemberExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'MemberExpression',
    text: `${helpers.parse(node.object).text}.${
      helpers.parse(node.property).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}

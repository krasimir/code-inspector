import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.UpdateExpression,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'UpdateExpression',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

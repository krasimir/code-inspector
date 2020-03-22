import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSExpressionWithTypeArguments,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSExpressionWithTypeArguments',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

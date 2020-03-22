import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.V8IntrinsicIdentifier,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'V8IntrinsicIdentifier',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

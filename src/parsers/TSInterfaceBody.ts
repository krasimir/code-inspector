import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSInterfaceBody,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSInterfaceBody',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

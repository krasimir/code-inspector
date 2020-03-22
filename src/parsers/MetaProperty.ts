import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.MetaProperty,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'MetaProperty',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSConstructorType,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSConstructorType',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

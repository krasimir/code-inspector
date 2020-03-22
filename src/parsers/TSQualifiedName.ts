import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSQualifiedName,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSQualifiedName',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

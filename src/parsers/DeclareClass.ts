// flow
import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.DeclareClass,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'DeclareClass',
    text: 'DeclareClass',
    ...helpers.normalizeLoc(node.loc),
  };
}

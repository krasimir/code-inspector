// flow
import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.ClassImplements,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'ClassImplements',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

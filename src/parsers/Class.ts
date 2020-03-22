import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(node: T.Class, helpers: ParserHelpers): NormalizedNode {
  return {
    type: 'Class',
    text: 'Class',
    ...helpers.normalizeLoc(node.loc),
  };
}

import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.LabeledStatement,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'LabeledStatement',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

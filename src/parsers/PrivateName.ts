import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.PrivateName,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'PrivateName',
    text: helpers.parse(node.id).text,
    ...helpers.normalizeLoc(node.loc),
  };
}

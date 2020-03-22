import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSExternalModuleReference,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'TSExternalModuleReference',
    text: '',
    ...helpers.normalizeLoc(node.loc),
  };
}

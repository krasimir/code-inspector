import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.CatchClause,
  helpers: ParserHelpers
): NormalizedNode {
  return {
    type: 'CatchClause',
    text: `catch(${helpers.parse(node.param).text})`,
    ...helpers.normalizeLoc(node.loc),
  };
}

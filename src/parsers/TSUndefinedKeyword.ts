import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.TSUndefinedKeyword): NormalizedNode | undefined {
  return undefined;
}

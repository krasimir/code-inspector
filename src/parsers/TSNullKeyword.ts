import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.TSNullKeyword): NormalizedNode | undefined {
  return undefined;
}

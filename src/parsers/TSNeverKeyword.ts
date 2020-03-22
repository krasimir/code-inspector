import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.TSNeverKeyword): NormalizedNode | undefined {
  return undefined;
}

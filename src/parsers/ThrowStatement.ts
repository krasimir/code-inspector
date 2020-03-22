import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.ThrowStatement): NormalizedNode | undefined {
  return undefined;
}

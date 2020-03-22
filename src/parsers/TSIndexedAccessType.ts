import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.TSIndexedAccessType): NormalizedNode | undefined {
  return undefined;
}

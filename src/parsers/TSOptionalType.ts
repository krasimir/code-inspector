import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.TSOptionalType): NormalizedNode | undefined {
  return undefined;
}

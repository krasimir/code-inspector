import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.ExistsTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}

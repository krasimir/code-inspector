import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.TypeofTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}

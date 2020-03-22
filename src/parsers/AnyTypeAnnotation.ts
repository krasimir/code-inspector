import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.AnyTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}

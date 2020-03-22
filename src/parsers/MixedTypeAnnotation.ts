import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.MixedTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}

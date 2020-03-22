import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.NullLiteralTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}

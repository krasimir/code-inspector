import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.BooleanLiteralTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}

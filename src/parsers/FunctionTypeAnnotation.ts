import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.FunctionTypeAnnotation): NormalizedNode | undefined {
  return undefined;
}

import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.NullLiteral): NormalizedNode | undefined {
  return undefined;
}

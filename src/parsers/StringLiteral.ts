import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.StringLiteral): NormalizedNode | undefined {
  return undefined;
}

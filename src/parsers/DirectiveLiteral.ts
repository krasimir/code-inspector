import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.DirectiveLiteral): NormalizedNode | undefined {
  return undefined;
}

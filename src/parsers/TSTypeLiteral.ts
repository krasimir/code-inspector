import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.TSTypeLiteral): NormalizedNode | undefined {
  return undefined;
}

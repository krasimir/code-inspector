import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.DebuggerStatement): NormalizedNode | undefined {
  return undefined;
}

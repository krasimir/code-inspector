import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.EnumDefaultedMember): NormalizedNode | undefined {
  return undefined;
}

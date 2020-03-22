import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.EnumNumberMember): NormalizedNode | undefined {
  return undefined;
}

import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.MemberExpression): NormalizedNode | undefined {
  return undefined;
}

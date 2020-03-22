import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.CallExpression): NormalizedNode | undefined {
  return undefined;
}

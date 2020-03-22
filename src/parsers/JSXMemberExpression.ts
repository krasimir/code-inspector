import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.JSXMemberExpression): NormalizedNode | undefined {
  return undefined;
}

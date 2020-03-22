import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.OptionalMemberExpression): NormalizedNode | undefined {
  return undefined;
}

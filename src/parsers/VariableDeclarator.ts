import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.VariableDeclarator): NormalizedNode | undefined {
  return undefined;
}

import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.VariableDeclaration): NormalizedNode | undefined {
  return undefined;
}

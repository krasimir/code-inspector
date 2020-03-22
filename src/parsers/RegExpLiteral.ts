import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.RegExpLiteral): NormalizedNode | undefined {
  return undefined;
}

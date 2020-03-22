import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.RegexLiteral): NormalizedNode | undefined {
  return undefined;
}

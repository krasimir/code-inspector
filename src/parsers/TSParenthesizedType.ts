import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.TSParenthesizedType): NormalizedNode | undefined {
  return undefined;
}

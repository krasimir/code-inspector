import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.TSLiteralType): NormalizedNode | undefined {
  return undefined;
}

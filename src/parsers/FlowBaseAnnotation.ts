import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.FlowBaseAnnotation): NormalizedNode | undefined {
  return undefined;
}

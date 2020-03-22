import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(
  node: T.ArgumentPlaceholder,
  { normalizeLoc }: { normalizeLoc: Function }
): NormalizedNode | undefined {
  return {
    type: 'ArgumentPlaceholder',
    text: '?',
    ...normalizeLoc(node.loc),
  };
}

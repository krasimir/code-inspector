import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.InterpreterDirective,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  console.log(node);
  return {
    type: 'InterpreterDirective',
    text: 'InterpreterDirective',
    ...helpers.normalizeLoc(node.loc),
  };
}

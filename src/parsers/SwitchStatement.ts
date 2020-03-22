import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.SwitchStatement,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'SwitchStatement',
    text: `switch(${helpers.parse(node.discriminant).text}}`,
    ...helpers.normalizeLoc(node.loc),
  };
}

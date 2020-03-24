import T from '@babel/types';

import { NormalizedNode, ParserHelpers } from '../types';

export default function(
  node: T.TSConditionalType,
  helpers: ParserHelpers,
  parent: T.Node,
  grandParent: T.Node
): NormalizedNode {
  return {
    type: 'TSConditionalType',
    text: `${helpers.parse(node.checkType).text} extends ${
      helpers.parse(node.extendsType).text
    } ? ${helpers.parse(node.trueType).text} : ${
      helpers.parse(node.falseType).text
    }`,
    ...helpers.normalizeLoc(node.loc),
  };
}

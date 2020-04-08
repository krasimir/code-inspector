/* eslint-disable global-require, @typescript-eslint/no-use-before-define */
import * as Traverse from '@babel/traverse';
import { NormalizedNode } from './types';
import { getNodeKey, normalizeLoc } from './utils';

import Parsers from './parsers';

function parseFunctionParameters(params: any[]): string {
  if (params.length > 0) {
    return `…${params.length}`;
  }
  return '';
}

function renderFunctionParameters(
  node: any,
  parent: Traverse.Node,
  grandParent: Traverse.Node,
  delimiter = ','
): string {
  if (node.params && node.params.length > 0) {
    return `(${parseItems(node.params, parent, grandParent, delimiter)})`;
  }
  return '()';
}

function parseItems(
  items: any[],
  parent: Traverse.Node,
  grandParent: Traverse.Node,
  delimiter = ','
): string {
  if (items.length > 0) {
    return items
      .map(i => parse(i, parent, grandParent).text)
      .join(`${delimiter} `);
  }
  return '';
}

export function parse(
  node: Traverse.Node | undefined,
  parent: Traverse.Node | null,
  grandParent: Traverse.Node | null
): NormalizedNode {
  if (node && Parsers[node.type]) {
    const normalizedNode = Parsers[node.type](
      node,
      {
        normalizeLoc,
        parse,
        parseFunctionParameters,
        parseItems,
        renderFunctionParameters,
      },
      parent,
      grandParent
    );
    normalizedNode.key = getNodeKey(node);
    if (parent) normalizedNode.parent = getNodeKey(parent);

    return normalizedNode;
  }
  if (node && node.type) {
    return {
      key: node.type,
      text: node.type,
      type: node.type,
    };
  }
  return {
    key: 'Unknown',
    text: '',
    type: 'Unknown',
  };
}

export function unknownNormalizedNode(): NormalizedNode {
  return {
    key: 'Unknown',
    text: 'Unknown',
    type: 'Unknown',
  };
}

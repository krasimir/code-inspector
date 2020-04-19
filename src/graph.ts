/* eslint-disable no-param-reassign, @typescript-eslint/no-use-before-define, @typescript-eslint/no-empty-function */
import uniq from 'lodash/uniq';
import get from 'lodash/get';
import { NormalizedNode, Analysis } from './types';
import { accessNode } from './utils';
import { NODES_FUNCTION_SCOPES, NODES_DEFINING_SCOPES } from './constants';

interface GraphNode {
  id: string;
  text: string;
  type: string;
  scope?: string;
  scopeDepth?: number;
}
interface GraphLink {
  source: string;
  target: string;
}

export default function(
  analysis: Analysis
): { nodes: GraphNode[]; links: GraphLink[] } {
  const { nodes, variables, tree } = analysis;
  const getNodeByKey = accessNode(nodes);
  const nodesData: GraphNode[] = [];
  const linksData: GraphLink[] = [];

  function addNodeToGraph(
    node: NormalizedNode,
    parent: string | NormalizedNode
  ) {
    const scopes = node.scopePath.split('.');
    nodesData.push({
      id: node.key,
      type: node.type,
      text: String(node.text),
      scope: scopes[scopes.length - 1],
      scopeDepth: node.scopePath === '' ? 0 : scopes.length,
    });
    if (parent) {
      linksData.push({
        source: typeof parent === 'string' ? parent : parent.key,
        target: node.key,
      });
    }
  }

  const dict: Record<string, Function> = {
    VariableDeclaration(node: NormalizedNode) {
      const identifier: NormalizedNode = get(node, 'children.0.children.0');
      addNodeToGraph(identifier, node.parent);
      return false;
    },
  };

  function process(node: NormalizedNode) {
    addNodeToGraph(node, node.parent);
    if (node.children) {
      node.children.forEach(c => {
        if (dict[c.type]) {
          if (dict[c.type](c)) {
            process(c);
          }
        } else {
          process(c);
        }
      });
    }
  }

  process(tree);

  return { nodes: nodesData, links: linksData };
}

/* eslint-disable no-param-reassign, @typescript-eslint/no-use-before-define, @typescript-eslint/no-empty-function */
import uniq from 'lodash/uniq';
import get from 'lodash/get';
import { NormalizedNode, Analysis } from './types';
import { accessNode } from './utils';
import { NODES_FUNCTION_SCOPES, NODES_DEFINING_SCOPES } from './constants';

interface GraphNode {
  id: string;
  text: string;
  group?: string;
}
interface GraphLink {
  from: string;
  to: string;
}

export default function(
  analysis: Analysis
): { nodes: GraphNode[]; links: GraphLink[] } {
  const { nodes, scopes, variables, tree } = analysis;
  const getNodeByKey = accessNode(nodes);
  const nodesData: GraphNode[] = [];
  const linksData: GraphLink[] = [];
  const dict: Record<string, Function> = {};

  function process(node: NormalizedNode, parent?: NormalizedNode) {
    const graphNode: GraphNode = { key: node.key, text: String(node.text) };
    if (node.isScope) {
      graphNode.isGroup = true;
    }
    if (node.scopePath !== '') {
      graphNode.group = node.scopePath.split('.').pop();
    }
    nodesData.push(graphNode);
    if (node.children) {
      node.children.forEach(c => {
        if (dict[c.type]) {
          dict[c.type](c, parent || node);
        } else {
          process(c);
        }
      });
    }
  }

  process(tree);

  return { nodes: nodesData, links: linksData };
}

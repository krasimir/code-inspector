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
  meta?: any;
  isScope?: boolean;
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
      meta: node.meta,
      isScope: node.isScope,
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
      return false;
    },
    FunctionDeclaration(node: NormalizedNode) {
      addNodeToGraph(node, node.parent);
      const body = node.children.find(({ type }) => type === 'BlockStatement');
      if (body) {
        body.children.forEach(bodyChild => {
          process(bodyChild, node);
        });
      }
    },
    Identifier(node: NormalizedNode) {
      const scopes = node.scopePath.split('.').reverse();
      for (const scopeKey of scopes) {
        const scopeNode: NormalizedNode = getNodeByKey(scopeKey);
        if (scopeNode && scopeNode.variables) {
          for (const variableKey of scopeNode.variables) {
            const variable: NormalizedNode = getNodeByKey(variableKey);
            if (variable && variable.text === node.text) {
              addNodeToGraph(variable, scopeNode);
              linksData.push({ source: variable.key, target: node.parent });
            }
          }
        }
      }
    },
  };

  function process(node: NormalizedNode, parent?: NormalizedNode) {
    addNodeToGraph(node, parent || node.parent);
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

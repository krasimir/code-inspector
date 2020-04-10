import uniq from 'lodash/uniq';
import get from 'lodash/get';
import { NormalizedNode, Analysis } from './types';

const GRAPH_TYPE = 'LR';
const SCOPE_NODES_TO_IGNORE = ['WhileStatement', 'Program'];
const BRANCHING = ['ConditionalExpression', 'IfStatement'];
const GRAPH_VALID_TYPES = [
  'FunctionDeclaration',
  'FunctionExpression',
  'ClassDeclaration',
  'ClassMethod',
  'ClassProperty',
  'JSXElement',
  'ImportDefaultSpecifier',
  'ReturnStatement',
  ...BRANCHING,
];

function GraphData(getNodeByKey: Function) {
  const data: string[] = [];
  const addedNodes: NormalizedNode[] = [];

  function getGraphLabel(node: NormalizedNode): any {
    let label = node.text;
    let graphType = ['(', ')'];
    if (node.type === 'FunctionDeclaration') {
      label = `${node.meta}()`;
    }
    if (node.type === 'ImportDefaultSpecifier') {
      label = node.meta;
    }
    if (BRANCHING.includes(node.type)) {
      graphType = ['{', '}'];
    }
    if (node.type === 'ReturnStatement') {
      graphType = ['>', ']'];
    }
    if (node.type === 'FunctionExpression') label = 'ƒ()';
    return `${node.key}${graphType[0]}"${label}"${graphType[1]}`;
  }
  return {
    addNode(node: NormalizedNode) {
      addedNodes.push(node);
      data.push(getGraphLabel(node));
    },
    link(node1: NormalizedNode, node2: NormalizedNode) {
      data.push(`${getGraphLabel(node1)} --- ${getGraphLabel(node2)}`);
    },
    export() {
      addedNodes.forEach(node => {
        const parent = node.path
          .split('.')
          .reverse()
          .find(key => {
            if (GRAPH_VALID_TYPES.includes(key.substr(0, key.indexOf('-')))) {
              return key;
            }
            return false;
          });
        if (parent) {
          this.link(getNodeByKey(parent), node);
        }
      });
      return uniq([`graph ${GRAPH_TYPE}`].concat(data)).join('\n');
    },
  };
}

function findDefinition(
  node: NormalizedNode,
  nodes: NormalizedNode[]
): NormalizedNode {
  const allNodesInTheCurrentScope = nodes.filter(
    n => n.scopePath === node.scopePath
  );
}

export function generateMermaidGraph(analysis: Analysis): string {
  const { nodes, scopes, variables } = analysis;
  const getNodeByKey = (key: string) => nodes.find(n => n.key === key);
  const graph = GraphData(getNodeByKey);

  nodes.forEach((node, i) => {
    if (GRAPH_VALID_TYPES.includes(node.type)) {
      graph.addNode(node);
    }
    if (
      node.type === 'Identifier' &&
      !node.path
        .split('.')
        .pop()
        .match(/^VariableDeclarator|FunctionDeclaration/)
    ) {
      console.log(node.text, node.scopePath, findDefinition(node, nodes));
    }
  });

  return graph.export();
}

/* eslint-disable no-param-reassign */
import uniq from 'lodash/uniq';
import { NormalizedNode, Analysis } from './types';

const GRAPH_TYPE = 'LR';
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
    link(node1: NormalizedNode, node2: NormalizedNode, style = '---') {
      data.push(`${getGraphLabel(node1)} ${style} ${getGraphLabel(node2)}`);
    },
    export() {
      return uniq([`graph ${GRAPH_TYPE}`].concat(data)).join('\n');
    },
  };
}

export function generateMermaidGraph(analysis: Analysis): string {
  const { nodes, scopes, variables, tree } = analysis;
  const getNodeByKeyCache: Record<string, NormalizedNode> = {};
  const getNodeByKey = (key: string) => {
    if (getNodeByKeyCache[key]) return getNodeByKeyCache[key];
    const found = nodes.find(n => n.key === key);
    if (found) {
      getNodeByKeyCache[key] = found;
    }
    return found;
  };
  const graph = GraphData(getNodeByKey);

  const traverse: Record<string, Function> = {
    process(node: NormalizedNode, stack: NormalizedNode[]) {
      if (this[node.type]) {
        this[node.type](node, [...stack]);
      }
    },
    processChildrenOf(node: NormalizedNode, stack: NormalizedNode[]) {
      if (node.children) {
        node.children.forEach(child => {
          this.process(child, stack);
        });
      }
    },
    linkToParent(node: NormalizedNode, stack: NormalizedNode[], style = '---') {
      const parent = stack[stack.length - 1];
      if (parent) {
        graph.link(parent, node, style);
      }
    },
    addToStack(node: NormalizedNode, stack: NormalizedNode[]) {
      stack.push(node);
    },
    //-----------------------------------------------------------------------
    // Processing specific nodes
    Program(node: NormalizedNode, stack: NormalizedNode[]) {
      this.linkToParent(node, stack);
      this.addToStack(node, stack);
      this.processChildrenOf(node, stack);
    },
    VariableDeclaration(node: NormalizedNode, stack: NormalizedNode[]) {
      const declarator = node.children.find(
        n => n.type === 'VariableDeclarator'
      );
      if (declarator) {
        this.linkToParent(declarator, stack);
        if (declarator.children && declarator.children[1]) {
          this.addToStack(declarator, stack);
          this.process(declarator.children[1], stack);
        }
      }
    },
    FunctionDeclaration(node: NormalizedNode, stack: NormalizedNode[]) {
      this.linkToParent(node, stack);
      this.addToStack(node, stack);
      const body = node.children.find(n => n.type === 'BlockStatement');
      if (body) {
        this.processChildrenOf(body, stack);
      }
    },
    ReturnStatement(node: NormalizedNode, stack: NormalizedNode[]) {
      this.linkToParent(node, stack);
      this.addToStack(node, stack);
      this.processChildrenOf(node, stack);
    },
    ConditionalExpression(node: NormalizedNode, stack: NormalizedNode[]) {
      this.linkToParent(node, stack);
      this.addToStack(node, stack);
      this.processChildrenOf(node, stack);
    },
    BinaryExpression(node: NormalizedNode, stack: NormalizedNode[]) {
      this.linkToParent(node, stack);
      this.addToStack(node, stack);
      this.processChildrenOf(node, stack);
    },
    NullLiteral(node: NormalizedNode, stack: NormalizedNode[]) {
      this.linkToParent(node, stack);
    },
    Identifier(node: NormalizedNode, stack: NormalizedNode[]) {
      const definition: NormalizedNode | undefined = [...stack]
        .reverse()
        .reduce((found, n) => {
          if (found) return found;
          if (n.isScope && n.variables && n.variables.length > 0) {
            const definitionKey = n.variables.find(
              key => getNodeByKey(key).meta === node.text
            );
            if (definitionKey) {
              found = getNodeByKey(definitionKey);
            }
          }
          return found;
        }, undefined);

      if (definition) {
        this.linkToParent(definition, stack, '-.-');
      }
    },
  };

  traverse.process(tree, []);

  return graph.export();
}

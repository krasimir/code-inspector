import uniq from 'lodash/uniq';
import get from 'lodash/get';
import { NormalizedNode, Analysis } from './types';

const SCOPE_NODES_TO_IGNORE = ['WhileStatement', 'Program'];
const ADDITIONAL_NODE_TYPES_TO_INCLUDE = [
  'FunctionDeclaration',
  'FunctionExpression',
  'ClassDeclaration',
  'ClassMethod',
  'ClassProperty',
  'JSXElement',
];

function normalizedNode2GraphNode(node: NormalizedNode): any {
  let label = node.text;
  if (node.type === 'FunctionDeclaration') label = node.meta;
  if (node.type === 'FunctionExpression') label = 'ƒ()';
  return `${node.key}("${label}")`;
}

export default function toGraph(analysis: Analysis): string {
  const { nodes, scopes, variables } = analysis;
  const graph: string[] = [];
  const links: Array<NormalizedNode>[] = [];
  const scopeNodes = scopes.reduce(
    (obj: Record<string, NormalizedNode>, node: NormalizedNode) => {
      if (!SCOPE_NODES_TO_IGNORE.includes(node.type)) {
        obj[node.key] = node;
      }
      return obj;
    },
    {}
  );
  const getNodeByKey = (key: string) => nodes.find(n => n.key === key);

  const functions = nodes.filter(n =>
    ADDITIONAL_NODE_TYPES_TO_INCLUDE.includes(n.type)
  );

  variables.forEach(v => graph.push(normalizedNode2GraphNode(v)));

  [].concat(variables, functions).forEach((node: NormalizedNode) => {
    let scopeKey;
    if (node.type === 'JSXElement') {
      scopeKey = node.path
        .split('.')
        .reverse()
        .find(n => n.match(/^JSXElement/));
    }
    if (!scopeKey) {
      scopeKey = node.scopePath
        .split('.')
        .reverse()
        .find(sKey => scopeNodes[sKey]);
    }
    if (scopeKey) {
      links.push([
        node,
        scopeNodes[scopeKey] ? scopeNodes[scopeKey] : getNodeByKey(scopeKey),
      ]);
    }
  });

  links.forEach(([n, scope]) => {
    graph.push(
      `${normalizedNode2GraphNode(scope)} --- ${normalizedNode2GraphNode(n)}`
    );
  });

  return uniq(['graph LR'].concat(graph)).join('\n');
}

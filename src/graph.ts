import uniq from 'lodash/uniq';
import get from 'lodash/get';
import { NormalizedNode, Analysis } from './types';

const IGNORE_SCOPES = ['Program', 'ArrowFunctionExpression', 'WhileStatement'];
function findScope(
  node: NormalizedNode,
  nodes: NormalizedNode[],
  scopes: NormalizedNode[]
): NormalizedNode | undefined {
  console.log(`${node.text} ${node.type}`);
  const foundScope = scopes.find(
    n => n.key === node.parent && !IGNORE_SCOPES.includes(n.type)
  );
  if (foundScope) {
    console.log('direct parent is the scope');
    return foundScope;
  }
  const parent = nodes.find(n => n.key === node.parent);
  if (parent) {
    return findScope(parent, nodes, scopes);
  }
  console.log('no scope');
}

function trackUsagesOf(
  node: NormalizedNode,
  analysis: Analysis,
  identifierMatcherField = 'text'
) {
  const { nodes, scopes } = analysis;
  const res = [`${node.key}("${get(node, identifierMatcherField)}")`];
  const usages = nodes.filter(
    n => n.type === 'Identifier' && n.text === get(node, identifierMatcherField)
  );
  console.log(
    '----------------------------------------->',
    `${node.text} ${node.type}`,
    `usages: ${usages.length}`
  );
  usages.forEach(usage => {
    console.log('-');
    const scope = findScope(usage, nodes, scopes);
    if (scope && scope.key !== node.key) {
      res.push(`${node.key} --> ${scope.key}`);
    }
  });
  return res;
}

const graphParsers: Record<string, Function> = {
  VariableDeclarator(node: NormalizedNode, analysis: Analysis) {
    // ignore if this is an ObjectPattern
    if (
      analysis.nodes
        .filter(n => n.type === 'ObjectPattern')
        .find(n => n.parent === node.key)
    ) {
      return [];
    }
    return trackUsagesOf(node, analysis);
  },
  ImportDefaultSpecifier(node: NormalizedNode, analysis: Analysis) {
    return trackUsagesOf(node, analysis, 'meta');
  },
  ObjectProperty(node: NormalizedNode, analysis: Analysis) {
    if (node.parent.match(/^ObjectPattern/)) {
      return trackUsagesOf(node, analysis);
    }
    return [];
  },
  FunctionDeclaration(node: NormalizedNode, analysis: Analysis) {
    return trackUsagesOf(node, analysis, 'meta');
  },
};

export default function toGraph(analysis: Analysis): string {
  const { nodes, scopes } = analysis;
  let graph: string[] = [];

  graph.push(`graph LR`);
  nodes.forEach(node => {
    if (graphParsers[node.type]) {
      graph = graph.concat(graphParsers[node.type](node, analysis));
    }
  });

  return uniq(graph).join('\n');
}

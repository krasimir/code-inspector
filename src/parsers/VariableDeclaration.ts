import get from 'lodash/get';

export default function(node: any): string {
  const declarationNode = get(node, 'declarations.0', null);
  if (declarationNode === null) {
    return 'VariableDeclaration';
  }
  if (declarationNode.id.name) {
    return declarationNode.id.name;
  }
  if (declarationNode.id.type === 'ObjectPattern') {
    return `{${declarationNode.id.properties
      .map((p: any) => get(p, 'key.name', 'var'))
      .join(',')}}`;
  }
  if (declarationNode.id.type === 'ArrayPattern') {
    return `[${declarationNode.id.elements
      .map((e: any) => get(e, 'name', 'var'))
      .join(',')}]`;
  }
  return 'variable';
}

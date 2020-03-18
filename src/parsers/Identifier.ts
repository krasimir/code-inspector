export default function Identifier(node: any): string {
  return node.name || 'identifier';
}

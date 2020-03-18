export default function MemberExpression(node: any, parse: Function): string {
  const object = parse(node.object);
  const property = parse(node.property);
  return `${object}.${property}`;
}

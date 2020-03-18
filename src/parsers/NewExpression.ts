export default function(node: any, parse: Function): string {
  const callee = parse(node.callee);
  return `new ${callee}`;
}

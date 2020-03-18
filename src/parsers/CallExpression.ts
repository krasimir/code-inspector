export default function CallExpression(node: any, parse: Function) {
  if (node.callee.type === 'Identifier') {
    return `${parse(node.callee)}()`;
  }
  return `${parse(node.callee)}()`;
}

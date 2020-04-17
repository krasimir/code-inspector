export const NODES_FUNCTION_SCOPES: Record<string, boolean> = {
  FunctionDeclaration: true,
  FunctionExpression: true,
  ArrowFunctionExpression: true,
  ClassMethod: true,
  ObjectMethod: true,
};
export const NODES_DEFINING_SCOPES: Record<string, boolean> = {
  Program: true,
  ClassDeclaration: true,
  ...NODES_FUNCTION_SCOPES,
};

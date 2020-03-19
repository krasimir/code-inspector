import { ParsersInterface } from '../types';
import CallExpression from './CallExpression';
import Identifier from './Identifier';
import MemberExpression from './MemberExpression';
import ClassMethod from './ClassMethod';
import ClassDeclaration from './ClassDeclaration';
import VariableDeclarator from './VariableDeclarator';
import VariableDeclaration from './VariableDeclaration';
import ArrowFunctionExpression from './ArrowFunctionExpression';
import ObjectProperty from './ObjectProperty';
import FunctionDeclaration from './FunctionDeclaration';
import ObjectMethod from './ObjectMethod';
import NewExpression from './NewExpression';
import ThisExpression from './ThisExpression';
import FunctionExpression from './FunctionExpression';

const parsers: ParsersInterface = {
  CallExpression,
  Identifier,
  MemberExpression,
  ClassMethod,
  ClassDeclaration,
  VariableDeclarator,
  VariableDeclaration,
  ArrowFunctionExpression,
  ObjectProperty,
  FunctionDeclaration,
  ObjectMethod,
  NewExpression,
  ThisExpression,
  FunctionExpression,
};

export default function parse(node: any): string | boolean {
  if (parsers[node.type]) {
    return parsers[node.type](node, parse);
  }
  if (node.type) {
    return node.type;
  }
  return false;
}

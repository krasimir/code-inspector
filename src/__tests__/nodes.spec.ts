import fs from 'fs';
import { setupTest } from '../__helpers__';

const code1 = fs
  .readFileSync(`${__dirname}/code-samples/code1.ts`)
  .toString('utf8');

setupTest('', 'AnyTypeAnnotation', 'not-found');

setupTest(`foo(?,x)`, 'ArgumentPlaceholder', {
  type: 'ArgumentPlaceholder',
  text: '?',
  start: [1, 5],
  end: [1, 6],
});

setupTest(`const foo = [1, 2, 3]`, 'ArrayExpression', {
  type: 'ArrayExpression',
  text: '[]',
  start: [1, 13],
  end: [1, 22],
});

setupTest(`const [a,b] = data`, 'ArrayPattern', {
  end: [1, 12],
  start: [1, 7],
  text: '[a, b]',
  type: 'ArrayPattern',
});

setupTest(``, 'ArrayTypeAnnotation', 'not-found');

setupTest(`(x) => x`, 'ArrowFunctionExpression', {
  end: [1, 9],
  start: [1, 1],
  text: 'ƒ',
  type: 'ArrowFunctionExpression',
});

setupTest(`a = 10;`, 'AssignmentExpression', {
  end: [1, 7],
  left: 'a',
  right: 10,
  start: [1, 1],
  text: '=',
  type: 'AssignmentExpression',
});

setupTest('function A(foo = "bar"){}', 'AssignmentPattern', {
  end: [1, 23],
  left: 'foo',
  right: 'bar',
  start: [1, 12],
  text: '=',
  type: 'AssignmentPattern',
});

setupTest(
  `async function A() {
  await service();
}`,
  'AwaitExpression',
  {
    end: [2, 18],
    start: [2, 3],
    text: '🕒 service()',
    type: 'AwaitExpression',
  }
);

setupTest('0o16432n', 'BigIntLiteral', {
  end: [1, 9],
  start: [1, 1],
  text: '0o16432',
  type: 'BigIntLiteral',
});

setupTest('', 'Binary', 'not-found');

setupTest('a + b', 'BinaryExpression', {
  end: [1, 6],
  left: 'a',
  right: 'b',
  start: [1, 1],
  text: '',
  type: 'BinaryExpression',
});

setupTest('on("click", ::view.reset)', 'BindExpression', {
  end: [1, 25],
  start: [1, 13],
  text: 'view.reset',
  type: 'BindExpression',
});

setupTest('', 'Block', 'not-found');

setupTest('', 'BlockParent', 'not-found');

setupTest('function A(){}', 'BlockStatement', {
  end: [1, 15],
  start: [1, 13],
  text: '⊏…⊐',
  type: 'BlockStatement',
});

setupTest('var a = true;', 'BooleanLiteral', {
  end: [1, 13],
  start: [1, 9],
  text: true,
  type: 'BooleanLiteral',
});

setupTest('', 'BooleanLiteralTypeAnnotation', 'not-found');

setupTest('', 'BooleanTypeAnnotation', 'not-found');

setupTest(
  `switch(foo) {
  case "BAR":
    //test
  break;
}`,
  'BreakStatement',
  { end: [4, 9], start: [4, 3], text: 'break', type: 'BreakStatement' }
);

setupTest('instance.method.fire("foo", bar)', 'CallExpression', {
  end: [1, 33],
  start: [1, 1],
  text: 'instance.method.fire(…)',
  type: 'CallExpression',
});

setupTest(
  `try {
}catch(err) {
  console.log(error);
}`,
  'CatchClause',
  { end: [4, 2], start: [2, 2], text: 'catch(err)', type: 'CatchClause' }
);

setupTest('', 'Class', 'not-found');

setupTest('class F {}', 'ClassBody', {
  end: [1, 11],
  start: [1, 9],
  text: '⊏F⊐',
  type: 'ClassBody',
});

setupTest('class F {}', 'ClassDeclaration', {
  end: [1, 11],
  start: [1, 1],
  text: 'F',
  type: 'ClassDeclaration',
});

setupTest('x = class A{}', 'ClassExpression', {
  end: [1, 14],
  start: [1, 5],
  text: 'A',
  type: 'ClassExpression',
});

setupTest('', 'ClassImplements', 'not-found');

setupTest(
  `class Foo {
  test() {
    return 'bar';
  }
}`,
  'ClassMethod',
  { end: [4, 4], start: [2, 3], text: 'Foo.test', type: 'ClassMethod' }
);

setupTest(
  `class Foo {
  #test() {
    return 'bar';
  }
}`,
  'ClassPrivateMethod',
  { end: [4, 4], start: [2, 3], text: 'Foo.test', type: 'ClassPrivateMethod' }
);

setupTest(
  `class Foo {
  #something: string
}`,
  'ClassPrivateProperty',
  {
    end: [2, 21],
    start: [2, 3],
    text: 'Foo.something',
    type: 'ClassPrivateProperty',
  }
);

setupTest(
  `class Foo {
  bar = 'Hey';
}
`,
  'ClassProperty',
  { end: [2, 15], start: [2, 3], text: 'Foo.bar', type: 'ClassProperty' }
);

setupTest('', 'CompletionStatement', 'not-found');

setupTest('', 'Conditional', 'not-found');

setupTest('test.is() ? true : false', 'ConditionalExpression', {
  end: [1, 25],
  start: [1, 1],
  text: 'test.is()',
  type: 'ConditionalExpression',
});

setupTest(
  'for(var i =0; i<10; i++) { if (i===3) continue; }',
  'ContinueStatement',
  { end: [1, 48], start: [1, 39], text: 'continue', type: 'ContinueStatement' }
);

setupTest('function T() { debugger; }', 'DebuggerStatement', {
  end: [1, 25],
  start: [1, 16],
  text: 'debugger',
  type: 'DebuggerStatement',
});

setupTest('', 'Declaration', 'not-found');
setupTest('', 'DeclareClass', 'not-found');
setupTest('', 'DeclareExportAllDeclaration', 'not-found');
setupTest('', 'DeclareExportDeclaration', 'not-found');
setupTest('', 'DeclareFunction', 'not-found');
setupTest('', 'DeclareInterface', 'not-found');
setupTest('', 'DeclareModule', 'not-found');
setupTest('', 'DeclareModuleExports', 'not-found');
setupTest('', 'DeclareOpaqueType', 'not-found');
setupTest('', 'DeclareTypeAlias', 'not-found');
setupTest('', 'DeclareVariable', 'not-found');
setupTest('', 'DeclaredPredicate', 'not-found');

setupTest(
  `@abc
class Foo {

}`,
  'Decorator',
  { end: [1, 5], start: [1, 1], text: '@abc', type: 'Decorator' }
);

setupTest(``, 'Directive', 'not-found');
setupTest('', 'DirectiveLiteral', 'not-found');

setupTest(
  `let x = do {
  let tmp = f();
  tmp * tmp + 1
};`,
  'DoExpression',
  { end: [4, 2], start: [1, 9], text: 'do', type: 'DoExpression' }
);

setupTest(
  `do that()
;while (true)`,
  'DoWhileStatement',
  { end: [2, 14], start: [1, 1], text: 'do/while', type: 'DoWhileStatement' }
);

setupTest(
  `if (cond) // Leading to EmptyStatement
; // Trailing to EmptyStatement`,
  'EmptyStatement',
  { end: [2, 2], start: [2, 1], text: '☐', type: 'EmptyStatement' }
);

setupTest('', 'EmptyTypeAnnotation', 'not-found');
setupTest('', 'EnumBody', 'not-found');
setupTest('', 'EnumBooleanBody', 'not-found');
setupTest('', 'EnumBooleanMember', 'not-found');
setupTest('', 'EnumDeclaration', 'not-found');
setupTest('', 'EnumDefaultedMember', 'not-found');
setupTest('', 'EnumMember', 'not-found');
setupTest('', 'EnumNumberBody', 'not-found');
setupTest('', 'EnumNumberMember', 'not-found');
setupTest('', 'EnumStringBody', 'not-found');
setupTest('', 'EnumStringMember', 'not-found');
setupTest('', 'EnumSymbolBody', 'not-found');
setupTest('', 'ExistsTypeAnnotation', 'not-found');

setupTest('export * from "crypto"', 'ExportAllDeclaration', {
  end: [1, 23],
  start: [1, 1],
  text: '↗ crypto',
  type: 'ExportAllDeclaration',
});

setupTest(code1, 'ExportDeclaration', 'not-found');

setupTest(code1, 'ExportDefaultDeclaration', {
  end: [4, 18],
  start: [4, 1],
  text: '↗ b',
  type: 'ExportDefaultDeclaration',
});

setupTest(code1, 'ExportDefaultSpecifier', {
  end: [1, 15],
  start: [1, 8],
  text: '↗ default',
  type: 'ExportDefaultSpecifier',
});

setupTest('export type G = typeof foo;', 'ExportNamedDeclaration', {
  end: [1, 28],
  start: [1, 1],
  text: 'G:foo',
  type: 'ExportNamedDeclaration',
});

setupTest('export * as default from "foo";', 'ExportNamespaceSpecifier', {
  end: [1, 20],
  start: [1, 8],
  text: '↗ default',
  type: 'ExportNamespaceSpecifier',
});

setupTest('', 'ExportSpecifier', 'not-found');
setupTest('', 'Expression', 'not-found');

setupTest(code1, 'ExpressionStatement', {
  end: [7, 20],
  start: [7, 3],
  text: 'use strict.foo',
  type: 'ExpressionStatement',
});

setupTest('', 'ExpressionWrapper', 'not-found');
setupTest('', 'File', 'not-found');
setupTest('', 'Flow', 'not-found');
setupTest('', 'FlowBaseAnnotation', 'not-found');
setupTest('', 'FlowDeclaration', 'not-found');
setupTest('', 'FlowPredicate', 'not-found');
setupTest('', 'FlowType', 'not-found');

setupTest('', 'For', 'not-found');

setupTest(code1, 'ForInStatement', {
  end: [15, 2],
  start: [13, 1],
  text: 'c in d',
  type: 'ForInStatement',
});

setupTest('for (p of q);', 'ForOfStatement', {
  end: [1, 14],
  start: [1, 1],
  text: 'p of q',
  type: 'ForOfStatement',
});

setupTest(code1, 'ForStatement', {
  end: [12, 2],
  start: [10, 1],
  text: 'for',
  type: 'ForStatement',
});

setupTest('', 'ForXStatement', 'not-found');

setupTest('', 'Function', 'not-found');

setupTest(code1, 'FunctionDeclaration', {
  end: [8, 2],
  start: [6, 1],
  text: 'f(j, k)',
  type: 'FunctionDeclaration',
});

setupTest(code1, 'FunctionExpression', {
  end: [19, 2],
  start: [17, 2],
  text: 'ƒ(w)',
  type: 'FunctionExpression',
});

setupTest('', 'FunctionParent', 'not-found');
setupTest('', 'FunctionTypeAnnotation', 'not-found');
setupTest('', 'FunctionTypeParam', 'not-found');
setupTest('', 'GenericTypeAnnotation', 'not-found');

setupTest('var a = "test"', 'Identifier', {
  end: [1, 6],
  start: [1, 5],
  text: 'a',
  type: 'Identifier',
});

setupTest('if (a) {}', 'IfStatement', {
  end: [1, 10],
  start: [1, 1],
  text: 'if (a)',
  type: 'IfStatement',
});

setupTest('', 'Immutable', undefined, true);

setupTest('', 'Import', undefined, true);

setupTest('', 'ImportDeclaration', undefined, true);

setupTest('', 'ImportDefaultSpecifier', undefined, true);

setupTest('', 'ImportNamespaceSpecifier', undefined, true);

setupTest('', 'ImportSpecifier', undefined, true);

setupTest('', 'InferredPredicate', undefined, true);

setupTest('', 'InterfaceDeclaration', undefined, true);

setupTest('', 'InterfaceExtends', undefined, true);

setupTest('', 'InterfaceTypeAnnotation', undefined, true);

setupTest('', 'InterpreterDirective', undefined, true);

setupTest('', 'IntersectionTypeAnnotation', undefined, true);

setupTest('', 'JSX', undefined, true);

setupTest('', 'JSXAttribute', undefined, true);

setupTest('', 'JSXClosingElement', undefined, true);

setupTest('', 'JSXClosingFragment', undefined, true);

setupTest('', 'JSXElement', undefined, true);

setupTest('', 'JSXEmptyExpression', undefined, true);

setupTest('', 'JSXExpressionContainer', undefined, true);

setupTest('', 'JSXFragment', undefined, true);

setupTest('', 'JSXIdentifier', undefined, true);

setupTest('', 'JSXMemberExpression', undefined, true);

setupTest('', 'JSXNamespacedName', undefined, true);

setupTest('', 'JSXOpeningElement', undefined, true);

setupTest('', 'JSXOpeningFragment', undefined, true);

setupTest('', 'JSXSpreadAttribute', undefined, true);

setupTest('', 'JSXSpreadChild', undefined, true);

setupTest('', 'JSXText', undefined, true);

setupTest('', 'LVal', undefined, true);

setupTest('', 'LabeledStatement', undefined, true);

setupTest('', 'Literal', undefined, true);

setupTest('', 'LogicalExpression', undefined, true);

setupTest('', 'Loop', undefined, true);

setupTest('', 'MemberExpression', undefined, true);

setupTest('', 'MetaProperty', undefined, true);

setupTest('', 'Method', undefined, true);

setupTest('', 'MixedTypeAnnotation', undefined, true);

setupTest('', 'ModuleDeclaration', undefined, true);

setupTest('', 'ModuleSpecifier', undefined, true);

setupTest('', 'NewExpression', undefined, true);

setupTest('', 'Noop', undefined, true);

setupTest('', 'NullLiteral', undefined, true);

setupTest('', 'NullLiteralTypeAnnotation', undefined, true);

setupTest('', 'NullableTypeAnnotation', undefined, true);

setupTest('', 'NumberLiteral', undefined, true);

setupTest('', 'NumberLiteralTypeAnnotation', undefined, true);

setupTest('', 'NumberTypeAnnotation', undefined, true);

setupTest('', 'NumericLiteral', undefined, true);

setupTest('', 'ObjectExpression', undefined, true);

setupTest('', 'ObjectMember', undefined, true);

setupTest('', 'ObjectMethod', undefined, true);

setupTest('', 'ObjectPattern', undefined, true);

setupTest('', 'ObjectProperty', undefined, true);

setupTest('', 'ObjectTypeAnnotation', undefined, true);

setupTest('', 'ObjectTypeCallProperty', undefined, true);

setupTest('', 'ObjectTypeIndexer', undefined, true);

setupTest('', 'ObjectTypeInternalSlot', undefined, true);

setupTest('', 'ObjectTypeProperty', undefined, true);

setupTest('', 'ObjectTypeSpreadProperty', undefined, true);

setupTest('', 'OpaqueType', undefined, true);

setupTest('', 'OptionalCallExpression', undefined, true);

setupTest('', 'OptionalMemberExpression', undefined, true);

setupTest('', 'ParenthesizedExpression', undefined, true);

setupTest('', 'Pattern', undefined, true);

setupTest('', 'PatternLike', undefined, true);

setupTest('', 'PipelineBareFunction', undefined, true);

setupTest('', 'PipelinePrimaryTopicReference', undefined, true);

setupTest('', 'PipelineTopicExpression', undefined, true);

setupTest('', 'Placeholder', undefined, true);

setupTest('', 'Private', undefined, true);

setupTest('', 'PrivateName', undefined, true);

setupTest('', 'Program', undefined, true);

setupTest('', 'Property', undefined, true);

setupTest('', 'Pureish', undefined, true);

setupTest('', 'QualifiedTypeIdentifier', undefined, true);

setupTest('', 'RecordExpression', undefined, true);

setupTest('', 'RegExpLiteral', undefined, true);

setupTest('', 'RegexLiteral', undefined, true);

setupTest('', 'RestElement', undefined, true);

setupTest('', 'RestProperty', undefined, true);

setupTest('', 'ReturnStatement', undefined, true);

setupTest('', 'Scopable', undefined, true);

setupTest('', 'SequenceExpression', undefined, true);

setupTest('', 'SpreadElement', undefined, true);

setupTest('', 'SpreadProperty', undefined, true);

setupTest('', 'Statement', undefined, true);

setupTest('', 'StringLiteral', undefined, true);

setupTest('', 'StringLiteralTypeAnnotation', undefined, true);

setupTest('', 'StringTypeAnnotation', undefined, true);

setupTest('', 'Super', undefined, true);

setupTest('', 'SwitchCase', undefined, true);

setupTest('', 'SwitchStatement', undefined, true);

setupTest('', 'SymbolTypeAnnotation', undefined, true);

setupTest('', 'TSAnyKeyword', undefined, true);

setupTest('', 'TSArrayType', undefined, true);

setupTest('', 'TSAsExpression', undefined, true);

setupTest('', 'TSBigIntKeyword', undefined, true);

setupTest('', 'TSBooleanKeyword', undefined, true);

setupTest('', 'TSCallSignatureDeclaration', undefined, true);

setupTest('', 'TSConditionalType', undefined, true);

setupTest('', 'TSConstructSignatureDeclaration', undefined, true);

setupTest('', 'TSConstructorType', undefined, true);

setupTest('', 'TSDeclareFunction', undefined, true);

setupTest('', 'TSDeclareMethod', undefined, true);

setupTest('', 'TSEntityName', undefined, true);

setupTest('', 'TSEnumDeclaration', undefined, true);

setupTest('', 'TSEnumMember', undefined, true);

setupTest('', 'TSExportAssignment', undefined, true);

setupTest('', 'TSExpressionWithTypeArguments', undefined, true);

setupTest('', 'TSExternalModuleReference', undefined, true);

setupTest('', 'TSFunctionType', undefined, true);

setupTest('', 'TSImportEqualsDeclaration', undefined, true);

setupTest('', 'TSImportType', undefined, true);

setupTest('', 'TSIndexSignature', undefined, true);

setupTest('', 'TSIndexedAccessType', undefined, true);

setupTest('', 'TSInferType', undefined, true);

setupTest('', 'TSInterfaceBody', undefined, true);

setupTest('', 'TSInterfaceDeclaration', undefined, true);

setupTest('', 'TSIntersectionType', undefined, true);

setupTest('', 'TSLiteralType', undefined, true);

setupTest('', 'TSMappedType', undefined, true);

setupTest('', 'TSMethodSignature', undefined, true);

setupTest('', 'TSModuleBlock', undefined, true);

setupTest('', 'TSModuleDeclaration', undefined, true);

setupTest('', 'TSNamespaceExportDeclaration', undefined, true);

setupTest('', 'TSNeverKeyword', undefined, true);

setupTest('', 'TSNonNullExpression', undefined, true);

setupTest('', 'TSNullKeyword', undefined, true);

setupTest('', 'TSNumberKeyword', undefined, true);

setupTest('', 'TSObjectKeyword', undefined, true);

setupTest('', 'TSOptionalType', undefined, true);

setupTest('', 'TSParameterProperty', undefined, true);

setupTest('', 'TSParenthesizedType', undefined, true);

setupTest('', 'TSPropertySignature', undefined, true);

setupTest('', 'TSQualifiedName', undefined, true);

setupTest('', 'TSRestType', undefined, true);

setupTest('', 'TSStringKeyword', undefined, true);

setupTest('', 'TSSymbolKeyword', undefined, true);

setupTest('', 'TSThisType', undefined, true);

setupTest('', 'TSTupleType', undefined, true);

setupTest('', 'TSType', undefined, true);

setupTest('', 'TSTypeAliasDeclaration', undefined, true);

setupTest('', 'TSTypeAnnotation', undefined, true);

setupTest('', 'TSTypeAssertion', undefined, true);

setupTest('', 'TSTypeElement', undefined, true);

setupTest('', 'TSTypeLiteral', undefined, true);

setupTest('', 'TSTypeOperator', undefined, true);

setupTest('', 'TSTypeParameter', undefined, true);

setupTest('', 'TSTypeParameterDeclaration', undefined, true);

setupTest('', 'TSTypeParameterInstantiation', undefined, true);

setupTest('', 'TSTypePredicate', undefined, true);

setupTest('', 'TSTypeQuery', undefined, true);

setupTest('', 'TSTypeReference', undefined, true);

setupTest('', 'TSUndefinedKeyword', undefined, true);

setupTest('', 'TSUnionType', undefined, true);

setupTest('', 'TSUnknownKeyword', undefined, true);

setupTest('', 'TSVoidKeyword', undefined, true);

setupTest('', 'TaggedTemplateExpression', undefined, true);

setupTest('', 'TemplateElement', undefined, true);

setupTest('', 'TemplateLiteral', undefined, true);

setupTest('', 'Terminatorless', undefined, true);

setupTest('', 'ThisExpression', undefined, true);

setupTest('', 'ThisTypeAnnotation', undefined, true);

setupTest('', 'ThrowStatement', undefined, true);

setupTest('', 'TryStatement', undefined, true);

setupTest('', 'TupleExpression', undefined, true);

setupTest('', 'TupleTypeAnnotation', undefined, true);

setupTest('', 'TypeAlias', undefined, true);

setupTest('', 'TypeAnnotation', undefined, true);

setupTest('', 'TypeCastExpression', undefined, true);

setupTest('', 'TypeParameter', undefined, true);

setupTest('', 'TypeParameterDeclaration', undefined, true);

setupTest('', 'TypeParameterInstantiation', undefined, true);

setupTest('', 'TypeofTypeAnnotation', undefined, true);

setupTest('', 'UnaryExpression', undefined, true);

setupTest('', 'UnaryLike', undefined, true);

setupTest('', 'UnionTypeAnnotation', undefined, true);

setupTest('', 'UpdateExpression', undefined, true);

setupTest('', 'UserWhitespacable', undefined, true);

setupTest('', 'V8IntrinsicIdentifier', undefined, true);

setupTest('', 'VariableDeclaration', undefined, true);

setupTest('', 'VariableDeclarator', undefined, true);

setupTest('', 'Variance', undefined, true);

setupTest('', 'VoidTypeAnnotation', undefined, true);

setupTest('', 'While', undefined, true);

setupTest('', 'WhileStatement', undefined, true);

setupTest('', 'WithStatement', undefined, true);

setupTest('', 'YieldExpression', undefined, true);

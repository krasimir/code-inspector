import fs from 'fs';
import { setupTest } from '../__helpers__';

const code = fs
  .readFileSync(`${__dirname}/code-samples/code.ts`)
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
  right: '"bar"',
  start: [1, 12],
  text: 'foo="bar"',
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
  text: 'a + b',
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
  { end: [4, 4], start: [2, 3], text: 'Foo.test()', type: 'ClassMethod' }
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
  text: 'test.is()?',
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
  text: '↗ "crypto"',
  type: 'ExportAllDeclaration',
});

setupTest(code, 'ExportDeclaration', 'not-found');

setupTest(code, 'ExportDefaultDeclaration', {
  end: [4, 18],
  start: [4, 1],
  text: '↗ b',
  type: 'ExportDefaultDeclaration',
});

setupTest(code, 'ExportDefaultSpecifier', {
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

setupTest(code, 'ExpressionStatement', {
  end: [7, 20],
  start: [7, 3],
  text: '"use strict".foo',
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

setupTest(code, 'ForInStatement', {
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

setupTest(code, 'ForStatement', {
  end: [12, 2],
  start: [10, 1],
  text: 'for',
  type: 'ForStatement',
});

setupTest('', 'ForXStatement', 'not-found');

setupTest('', 'Function', 'not-found');

setupTest(code, 'FunctionDeclaration', {
  end: [8, 2],
  start: [6, 1],
  text: 'f(j, k)',
  type: 'FunctionDeclaration',
});

setupTest(code, 'FunctionExpression', {
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

setupTest('', 'Immutable', 'not-found');
setupTest('', 'Import', 'not-found');

setupTest('import a, { b } from "B"', 'ImportDeclaration', {
  end: [1, 25],
  start: [1, 1],
  text: 'a, b ⤺ "B"',
  type: 'ImportDeclaration',
});

setupTest('import Service from "./code/somewhere"', 'ImportDefaultSpecifier', {
  end: [1, 15],
  start: [1, 8],
  text: 'Service ⤺ "./code/somewhere"',
  type: 'ImportDefaultSpecifier',
});

setupTest('import * as crypto from "crypto"', 'ImportNamespaceSpecifier', {
  end: [1, 19],
  start: [1, 8],
  text: 'crypto ⤺ "crypto"',
  type: 'ImportNamespaceSpecifier',
});

setupTest('import a, { b } from "B"', 'ImportSpecifier', {
  end: [1, 14],
  start: [1, 13],
  text: 'b',
  type: 'ImportSpecifier',
});

setupTest('', 'InferredPredicate', 'not-found');
setupTest('', 'InterfaceDeclaration', 'not-found');
setupTest('', 'InterfaceExtends', 'not-found');
setupTest('', 'InterfaceTypeAnnotation', 'not-found');
setupTest('', 'InterpreterDirective', 'not-found');
setupTest('', 'IntersectionTypeAnnotation', 'not-found');

setupTest('', 'JSX', 'not-found');

setupTest(code, 'JSXAttribute', {
  end: [27, 17],
  start: [27, 10],
  text: 'b=" "',
  type: 'JSXAttribute',
});

setupTest(code, 'JSXClosingElement', {
  end: [25, 27],
  start: [25, 23],
  text: '</p>',
  type: 'JSXClosingElement',
});

setupTest(code, 'JSXClosingFragment', {
  end: [30, 10],
  start: [30, 7],
  text: '</>',
  type: 'JSXClosingFragment',
});

setupTest(code, 'JSXElement', {
  end: [32, 24],
  start: [23, 5],
  text: '<AnotherComponent>…</AnotherComponent>',
  type: 'JSXElement',
});

setupTest(code, 'JSXEmptyExpression', {
  end: [31, 8],
  start: [31, 8],
  text: '{}',
  type: 'JSXEmptyExpression',
});

setupTest(
  `<><div>JSXElement</div>JSXText{'FooBar'}</>`,
  'JSXExpressionContainer',
  {
    end: [1, 41],
    start: [1, 31],
    text: '"FooBar"',
    type: 'JSXExpressionContainer',
  }
);

setupTest(code, 'JSXFragment', {
  end: [30, 10],
  start: [28, 7],
  text: '<></>',
  type: 'JSXFragment',
});

setupTest(code, 'JSXIdentifier', {
  end: [23, 22],
  start: [23, 6],
  text: 'AnotherComponent',
  type: 'JSXIdentifier',
});

setupTest('<a.b.c></a.b.c>', 'JSXMemberExpression', {
  end: [1, 7],
  start: [1, 2],
  text: 'a.b.c',
  type: 'JSXMemberExpression',
});

setupTest('<Foo:Bar />', 'JSXNamespacedName', {
  end: [1, 9],
  start: [1, 2],
  text: '<Foo:Bar>',
  type: 'JSXNamespacedName',
});

setupTest(code, 'JSXOpeningElement', {
  end: [23, 23],
  start: [23, 5],
  text: '<AnotherComponent>',
  type: 'JSXOpeningElement',
});

setupTest(code, 'JSXOpeningFragment', {
  end: [28, 9],
  start: [28, 7],
  text: '<>',
  type: 'JSXOpeningFragment',
});

setupTest('<Foo {...data} />', 'JSXSpreadAttribute', {
  end: [1, 15],
  start: [1, 6],
  text: '...data',
  type: 'JSXSpreadAttribute',
});

setupTest('<div {...c}> {...children}{a}{...b}</div>', 'JSXSpreadChild', {
  end: [1, 27],
  start: [1, 14],
  text: '...children',
  type: 'JSXSpreadChild',
});

setupTest('<p>Hello</p>', 'JSXText', {
  end: [1, 9],
  start: [1, 4],
  text: 'Hello',
  type: 'JSXText',
});

setupTest('', 'LVal', 'not-found');

setupTest(
  'target1: target2: target3: while (true) { continue target1; }',
  'LabeledStatement',
  { end: [1, 62], start: [1, 1], text: 'target1:', type: 'LabeledStatement' }
);

setupTest('', 'Literal', 'not-found');

setupTest(code, 'LogicalExpression', {
  end: [36, 31],
  start: [36, 5],
  text: 'a === "foo" && x || y || z',
  type: 'LogicalExpression',
});

setupTest('', 'Loop', 'not-found');

setupTest(code, 'MemberExpression', {
  end: [7, 19],
  start: [7, 3],
  text: '"use strict".foo',
  type: 'MemberExpression',
});

setupTest(``, 'MetaProperty', 'not-found');

setupTest('', 'Method', 'not-found');

setupTest('', 'MixedTypeAnnotation', 'not-found');

setupTest('', 'ModuleDeclaration', 'not-found');

setupTest('', 'ModuleSpecifier', 'not-found');

setupTest(code, 'NewExpression', {
  end: [40, 34],
  start: [40, 13],
  text: 'new CCC(…2)',
  type: 'NewExpression',
});

setupTest('', 'Noop', 'not-found');

setupTest(code, 'NullLiteral', {
  end: [41, 17],
  start: [41, 13],
  text: 'null',
  type: 'NullLiteral',
});

setupTest('', 'NullLiteralTypeAnnotation', 'not-found');
setupTest('', 'NullableTypeAnnotation', 'not-found');
setupTest('', 'NumberLiteral', 'not-found');
setupTest('', 'NumberLiteralTypeAnnotation', 'not-found');
setupTest('', 'NumberTypeAnnotation', 'not-found');

setupTest('[1, 2, 3]', 'NumericLiteral', {
  end: [1, 3],
  start: [1, 2],
  text: 1,
  type: 'NumericLiteral',
});

setupTest(code, 'ObjectExpression', {
  end: [2, 20],
  start: [2, 18],
  text: '{…}',
  type: 'ObjectExpression',
});

setupTest('', 'ObjectMember', 'not-found');

setupTest(code, 'ObjectMethod', {
  end: [47, 4],
  start: [45, 3],
  text: 'mmm(…1)',
  type: 'ObjectMethod',
});

setupTest(code, 'ObjectPattern', {
  end: [49, 19],
  start: [49, 7],
  text: '{foo, mmm}',
  type: 'ObjectPattern',
});

setupTest(code, 'ObjectProperty', {
  end: [44, 13],
  start: [44, 3],
  text: 'foo',
  type: 'ObjectProperty',
});

setupTest('', 'ObjectTypeAnnotation', 'not-found');
setupTest('', 'ObjectTypeCallProperty', 'not-found');
setupTest('', 'ObjectTypeIndexer', 'not-found');
setupTest('', 'ObjectTypeInternalSlot', 'not-found');
setupTest('', 'ObjectTypeProperty', 'not-found');
setupTest('', 'ObjectTypeSpreadProperty', 'not-found');
setupTest('', 'OpaqueType', 'not-found');

setupTest('a?.func?.(foo)', 'OptionalCallExpression', {
  end: [1, 15],
  start: [1, 1],
  text: 'a?.func?.(…1)',
  type: 'OptionalCallExpression',
});

setupTest('a?.func?.(foo)', 'OptionalMemberExpression', {
  end: [1, 8],
  start: [1, 1],
  text: 'a?.func',
  type: 'OptionalMemberExpression',
});

setupTest('', 'ParenthesizedExpression', 'not-found');

setupTest('', 'Pattern', 'not-found');

setupTest('', 'PatternLike', 'not-found');
setupTest('', 'PipelineBareFunction', 'not-found');
setupTest('', 'PipelinePrimaryTopicReference', 'not-found');
setupTest('', 'PipelineTopicExpression', 'not-found');
setupTest(code, 'Placeholder', 'not-found');
setupTest(code, 'Private', 'not-found');

setupTest(code, 'PrivateName', {
  end: [58, 5],
  start: [58, 3],
  text: 'a',
  type: 'PrivateName',
});

setupTest('', 'Program', {
  end: [1, 1],
  start: [1, 1],
  text: 'Program',
  type: 'Program',
});

setupTest('', 'Property', 'not-found');
setupTest('', 'Pureish', 'not-found');
setupTest('', 'QualifiedTypeIdentifier', 'not-found');
setupTest('', 'RecordExpression', 'not-found');

setupTest(code, 'RegExpLiteral', {
  end: [65, 23],
  start: [65, 13],
  text: '/foo bar/g',
  type: 'RegExpLiteral',
});

setupTest(code, 'RegexLiteral', 'not-found');

setupTest(code, 'RestElement', {
  end: [67, 28],
  start: [67, 23],
  text: '...re',
  type: 'RestElement',
});

setupTest(code, 'RestProperty', 'not-found');

setupTest(code, 'ReturnStatement', {
  end: [18, 34],
  start: [18, 3],
  text: '← fn(op) / 42 / i',
  type: 'ReturnStatement',
});

setupTest(code, 'Scopable', 'not-found');

setupTest(code, 'SequenceExpression', {
  end: [75, 22],
  start: [75, 14],
  text: 'a(), b()',
  type: 'SequenceExpression',
});

setupTest(code, 'SpreadElement', {
  end: [69, 10],
  start: [69, 5],
  text: '...re',
  type: 'SpreadElement',
});

setupTest(code, 'SpreadProperty', 'not-found');

setupTest(code, 'Statement', 'not-found');

setupTest(code, 'StringLiteral', {
  end: [1, 26],
  start: [1, 21],
  text: '"bar"',
  type: 'StringLiteral',
});

setupTest(code, 'StringLiteralTypeAnnotation', 'not-found');
setupTest(code, 'StringTypeAnnotation', 'not-found');

setupTest(code, 'Super', {
  end: [79, 10],
  start: [79, 5],
  text: 'super',
  type: 'Super',
});

setupTest(code, 'SwitchCase', {
  end: [84, 41],
  start: [84, 3],
  text: 'case "foo"',
  type: 'SwitchCase',
});

setupTest(code, 'SwitchStatement', {
  end: [85, 2],
  start: [83, 1],
  text: 'switch(SOME}',
  type: 'SwitchStatement',
});

setupTest(code, 'SymbolTypeAnnotation', 'not-found');

setupTest(code, 'TSAnyKeyword', {
  end: [87, 19],
  start: [87, 16],
  text: 'any',
  type: 'TSAnyKeyword',
});

setupTest(code, 'TSArrayType', {
  end: [88, 18],
  start: [88, 10],
  text: 'number[]',
  type: 'TSArrayType',
});

setupTest(code, 'TSAsExpression', {
  end: [90, 16],
  start: [90, 5],
  text: 'a as Object',
  type: 'TSAsExpression',
});

setupTest(code, 'TSBigIntKeyword', {
  end: [103, 14],
  start: [103, 8],
  text: 'bigint',
  type: 'TSBigIntKeyword',
});

setupTest(code, 'TSBooleanKeyword', {
  end: [94, 19],
  start: [94, 12],
  text: 'boolean',
  type: 'TSBooleanKeyword',
});

setupTest(code, 'TSCallSignatureDeclaration', {
  end: [106, 32],
  start: [106, 3],
  text: '(x, b):void',
  type: 'TSCallSignatureDeclaration',
});

setupTest(code, 'TSConditionalType', {
  end: [109, 46],
  start: [109, 8],
  text: 'number extends string ? boolean : null',
  type: 'TSConditionalType',
});

setupTest(code, 'TSConstructSignatureDeclaration', {
  end: [112, 25],
  start: [112, 3],
  text: 'new (x):void',
  type: 'TSConstructSignatureDeclaration',
});

setupTest(code, 'TSConstructorType', 'not-found');

setupTest(code, 'TSDeclareFunction', {
  end: [115, 36],
  start: [115, 1],
  text: 'declare f(a):void',
  type: 'TSDeclareFunction',
});

setupTest(code, 'TSDeclareMethod', {
  end: [119, 33],
  start: [119, 3],
  text: 'static f(…2)',
  type: 'TSDeclareMethod',
});

setupTest(code, 'TSEntityName', 'not-found');

setupTest(code, 'TSEnumDeclaration', {
  end: [127, 2],
  start: [125, 1],
  text: 'enum Foo1 {"OP"}',
  type: 'TSEnumDeclaration',
});

setupTest(code, 'TSEnumMember', {
  end: [126, 14],
  start: [126, 3],
  text: '"OP"',
  type: 'TSEnumMember',
});

setupTest(code, 'TSExportAssignment', {
  end: [134, 12],
  start: [134, 1],
  text: '↗ f',
  type: 'TSExportAssignment',
});

setupTest(code, 'TSExpressionWithTypeArguments', {
  end: [136, 27],
  start: [136, 21],
  text: 'X.Y<T>',
  type: 'TSExpressionWithTypeArguments',
});

setupTest(code, 'TSExternalModuleReference', {
  end: [138, 35],
  start: [138, 15],
  text: '"asdfasdf"',
  type: 'TSExternalModuleReference',
});

setupTest(code, 'TSFunctionType', {
  end: [140, 38],
  start: [140, 15],
  text: 'ƒ({theme}:any)',
  type: 'TSFunctionType',
});

setupTest(code, 'TSImportEqualsDeclaration', {
  end: [138, 36],
  start: [138, 1],
  text: 'xxff ⤺ "asdfasdf"',
  type: 'TSImportEqualsDeclaration',
});

setupTest(code, 'TSImportType', {
  end: [142, 30],
  start: [142, 17],
  text: '⤺ "./x"',
  type: 'TSImportType',
});

setupTest(code, 'TSIndexSignature', {
  end: [145, 20],
  start: [145, 3],
  text: '[x]:any',
  type: 'TSIndexSignature',
});

setupTest(code, 'TSIndexedAccessType', {
  end: [149, 14],
  start: [149, 10],
  text: 'T[K]',
  type: 'TSIndexedAccessType',
});

setupTest(code, 'TSInferType', {
  end: [151, 37],
  start: [151, 30],
  text: 'infer U',
  type: 'TSInferType',
});

setupTest(code, 'TSInterfaceBody', {
  end: [107, 2],
  start: [105, 13],
  text: '{…}',
  type: 'TSInterfaceBody',
});

setupTest(code, 'TSInterfaceDeclaration', {
  end: [107, 2],
  start: [105, 1],
  text: 'interface I',
  type: 'TSInterfaceDeclaration',
});

setupTest(code, 'TSIntersectionType', {
  end: [153, 25],
  start: [153, 12],
  text: 'x90 & Element',
  type: 'TSIntersectionType',
});

setupTest(code, 'TSLiteralType', {
  end: [155, 19],
  start: [155, 14],
  text: false,
  type: 'TSLiteralType',
});

setupTest(code, 'TSMappedType', {
  end: [157, 37],
  start: [157, 11],
  text: '{ [P in string]:number }',
  type: 'TSMappedType',
});

setupTest(code, 'TSMethodSignature', {
  end: [160, 29],
  start: [160, 3],
  text: 'Symbol.iterator():void',
  type: 'TSMethodSignature',
});

setupTest(code, 'TSModuleBlock', {
  end: [164, 22],
  start: [164, 20],
  text: '{…}',
  type: 'TSModuleBlock',
});

setupTest(code, 'TSModuleDeclaration', {
  end: [164, 22],
  start: [164, 1],
  text: 'declare module "m"',
  type: 'TSModuleDeclaration',
});

setupTest(code, 'TSNamespaceExportDeclaration', {
  end: [166, 23],
  start: [166, 1],
  text: '↗ as namespace A',
  type: 'TSNamespaceExportDeclaration',
});

setupTest(code, 'TSNeverKeyword', {
  end: [95, 14],
  start: [95, 9],
  text: 'never',
  type: 'TSNeverKeyword',
});

setupTest(code, 'TSNonNullExpression', {
  end: [168, 3],
  start: [168, 1],
  text: 'x!',
  type: 'TSNonNullExpression',
});

setupTest(code, 'TSNullKeyword', {
  end: [96, 14],
  start: [96, 10],
  text: 'null',
  type: 'TSNullKeyword',
});

setupTest(code, 'TSNumberKeyword', {
  end: [88, 16],
  start: [88, 10],
  text: 'number',
  type: 'TSNumberKeyword',
});

setupTest(code, 'TSObjectKeyword', {
  end: [98, 14],
  start: [98, 8],
  text: 'object',
  type: 'TSObjectKeyword',
});

setupTest(code, 'TSOptionalType', {
  end: [170, 27],
  start: [170, 20],
  text: 'number?',
  type: 'TSOptionalType',
});

setupTest(code, 'TSParameterProperty', {
  end: [174, 28],
  start: [174, 7],
  text: 'public y=0',
  type: 'TSParameterProperty',
});

setupTest(code, 'TSParenthesizedType', {
  end: [151, 38],
  start: [151, 29],
  text: '(infer U)',
  type: 'TSParenthesizedType',
});

setupTest(code, 'TSPropertySignature', {
  end: [178, 29],
  start: [178, 19],
  text: 'x:number',
  type: 'TSPropertySignature',
});

setupTest(code, 'TSQualifiedName', {
  end: [136, 24],
  start: [136, 21],
  text: 'X.Y',
  type: 'TSQualifiedName',
});

setupTest(code, 'TSRestType', {
  end: [180, 31],
  start: [180, 20],
  text: '...string[]',
  type: 'TSRestType',
});

setupTest(code, 'TSStringKeyword', {
  end: [99, 15],
  start: [99, 9],
  text: 'string',
  type: 'TSStringKeyword',
});

setupTest(code, 'TSSymbolKeyword', {
  end: [100, 15],
  start: [100, 9],
  text: 'symbol',
  type: 'TSSymbolKeyword',
});

setupTest(code, 'TSThisType', {
  end: [183, 16],
  start: [183, 12],
  text: 'this',
  type: 'TSThisType',
});

setupTest(code, 'TSTupleType', {
  end: [170, 48],
  start: [170, 11],
  text: '[string, number?, (string | number)?]',
  type: 'TSTupleType',
});

setupTest(code, 'TSType', 'not-found');

setupTest(code, 'TSTypeAliasDeclaration', {
  end: [140, 39],
  start: [140, 1],
  text: 'MyType:ƒ({theme}:any)',
  type: 'TSTypeAliasDeclaration',
});

setupTest(code, 'TSTypeAnnotation', {
  end: [87, 19],
  start: [87, 14],
  text: ':any',
  type: 'TSTypeAnnotation',
});

setupTest(code, 'TSTypeAssertion', 'not-found');
setupTest(code, 'TSTypeElement', 'not-found');

setupTest(code, 'TSTypeLiteral', {
  end: [190, 28],
  start: [190, 15],
  text: '{x:number}',
  type: 'TSTypeLiteral',
});

setupTest(code, 'TSTypeOperator', {
  end: [193, 17],
  start: [193, 10],
  text: 'keyof T',
  type: 'TSTypeOperator',
});

setupTest(code, 'TSTypeParameter', {
  end: [116, 21],
  start: [116, 20],
  text: 'T',
  type: 'TSTypeParameter',
});

setupTest(code, 'TSTypeParameterDeclaration', {
  end: [116, 22],
  start: [116, 19],
  text: '<T>',
  type: 'TSTypeParameterDeclaration',
});

setupTest(code, 'TSTypeParameterInstantiation', {
  end: [136, 27],
  start: [136, 24],
  text: '<T>',
  type: 'TSTypeParameterInstantiation',
});

setupTest(code, 'TSTypePredicate', {
  end: [183, 26],
  start: [183, 12],
  text: 'this is :string',
  type: 'TSTypePredicate',
});

setupTest(code, 'TSTypeQuery', {
  end: [142, 30],
  start: [142, 10],
  text: '⤺ "./x"',
  type: 'TSTypeQuery',
});

setupTest(code, 'TSTypeReference', {
  end: [90, 16],
  start: [90, 10],
  text: 'Object',
  type: 'TSTypeReference',
});

setupTest(code, 'TSUndefinedKeyword', {
  end: [101, 17],
  start: [101, 8],
  text: 'undefined',
  type: 'TSUndefinedKeyword',
});

setupTest(code, 'TSUnionType', {
  end: [170, 45],
  start: [170, 30],
  text: 'string | number',
  type: 'TSUnionType',
});

setupTest(code, 'TSUnknownKeyword', {
  end: [93, 16],
  start: [93, 9],
  text: 'unknown',
  type: 'TSUnknownKeyword',
});

setupTest(code, 'TSVoidKeyword', {
  end: [87, 25],
  start: [87, 21],
  text: 'void',
  type: 'TSVoidKeyword',
});

setupTest(code, 'TaggedTemplateExpression', {
  end: [195, 45],
  start: [195, 1],
  text: 'raw`...`',
  type: 'TaggedTemplateExpression',
});

setupTest(code, 'TemplateElement', {
  end: [195, 11],
  start: [195, 5],
  text: 'token ',
  type: 'TemplateElement',
});

setupTest(code, 'TemplateLiteral', {
  end: [195, 45],
  start: [195, 4],
  text: '`...`',
  type: 'TemplateLiteral',
});

setupTest('code', 'Terminatorless', 'not-found');

setupTest(code, 'ThisExpression', {
  end: [199, 9],
  start: [199, 5],
  text: 'this',
  type: 'ThisExpression',
});

setupTest(code, 'ThisTypeAnnotation', 'not-found');

setupTest(code, 'ThrowStatement', {
  end: [203, 12],
  start: [203, 1],
  text: 'throw ui89',
  type: 'ThrowStatement',
});

setupTest(code, 'TryStatement', {
  end: [209, 2],
  start: [205, 1],
  text: 'try',
  type: 'TryStatement',
});

setupTest(code, 'TupleExpression', 'not-found');
setupTest(code, 'TupleTypeAnnotation', 'not-found');
setupTest(code, 'TypeAlias', 'not-found');
setupTest(code, 'TypeAnnotation', 'not-found');
setupTest(code, 'TypeCastExpression', 'not-found');
setupTest(code, 'TypeParameter', 'not-found');
setupTest(code, 'TypeParameterDeclaration', 'not-found');
setupTest(code, 'TypeParameterInstantiation', 'not-found');
setupTest(code, 'TypeofTypeAnnotation', 'not-found');

setupTest(code, 'UnaryExpression', {
  end: [213, 6],
  start: [213, 1],
  text: '-x675',
  type: 'UnaryExpression',
});

setupTest(code, 'UnaryLike', 'not-found');

setupTest(code, 'UnionTypeAnnotation', 'not-found');

setupTest(code, 'UpdateExpression', {
  end: [10, 23],
  start: [10, 20],
  text: '++',
  type: 'UpdateExpression',
});

setupTest(code, 'UserWhitespacable', 'not-found');

setupTest(code, 'V8IntrinsicIdentifier', 'not-found');

setupTest(code, 'VariableDeclaration', {
  end: [2, 21],
  start: [2, 8],
  text: 'a',
  type: 'VariableDeclaration',
});

setupTest(code, 'VariableDeclarator', {
  end: [2, 20],
  start: [2, 14],
  text: 'a',
  type: 'VariableDeclarator',
});

setupTest(code, 'Variance', 'not-found');

setupTest(code, 'VoidTypeAnnotation', 'not-found');

setupTest(code, 'While', 'not-found');

setupTest(code, 'WhileStatement', {
  end: [215, 18],
  start: [215, 1],
  text: 'while(true)',
  type: 'WhileStatement',
});

setupTest(code, 'WithStatement', {
  end: [219, 2],
  start: [217, 1],
  text: 'with(x4590d) { ... }',
  type: 'WithStatement',
});

setupTest(code, 'YieldExpression', {
  end: [52, 32],
  start: [52, 8],
  text: 'yield select(…)',
  type: 'YieldExpression',
});

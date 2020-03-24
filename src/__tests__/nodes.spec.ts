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

setupTest('', 'JSX', undefined, true);

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
  text: '(x:number, b:string):void',
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
  text: 'new (x:number):void',
  type: 'TSConstructSignatureDeclaration',
});

setupTest(code, 'TSConstructorType', 'not-found');

setupTest(code, 'TSDeclareFunction', {
  end: [115, 36],
  start: [115, 1],
  text: 'declare f(a:number):void',
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

setupTest(code, 'TSExportAssignment', undefined, true);

setupTest(code, 'TSExpressionWithTypeArguments', undefined, true);

setupTest(code, 'TSExternalModuleReference', undefined, true);

setupTest(code, 'TSFunctionType', undefined, true);

setupTest(code, 'TSImportEqualsDeclaration', undefined, true);

setupTest(code, 'TSImportType', undefined, true);

setupTest(code, 'TSIndexSignature', undefined, true);

setupTest(code, 'TSIndexedAccessType', undefined, true);

setupTest(code, 'TSInferType', undefined, true);

setupTest(code, 'TSInterfaceBody', undefined, true);

setupTest(code, 'TSInterfaceDeclaration', undefined, true);

setupTest(code, 'TSIntersectionType', undefined, true);

setupTest(code, 'TSLiteralType', undefined, true);

setupTest(code, 'TSMappedType', undefined, true);

setupTest(code, 'TSMethodSignature', undefined, true);

setupTest(code, 'TSModuleBlock', undefined, true);

setupTest(code, 'TSModuleDeclaration', undefined, true);

setupTest(code, 'TSNamespaceExportDeclaration', undefined, true);

setupTest(code, 'TSNeverKeyword', undefined, true);

setupTest(code, 'TSNonNullExpression', undefined, true);

setupTest(code, 'TSNullKeyword', undefined, true);

setupTest(code, 'TSNumberKeyword', undefined, true);

setupTest(code, 'TSObjectKeyword', undefined, true);

setupTest(code, 'TSOptionalType', undefined, true);

setupTest(code, 'TSParameterProperty', undefined, true);

setupTest(code, 'TSParenthesizedType', undefined, true);

setupTest(code, 'TSPropertySignature', undefined, true);

setupTest(code, 'TSQualifiedName', undefined, true);

setupTest(code, 'TSRestType', undefined, true);

setupTest(code, 'TSStringKeyword', undefined, true);

setupTest(code, 'TSSymbolKeyword', undefined, true);

setupTest(code, 'TSThisType', undefined, true);

setupTest(code, 'TSTupleType', undefined, true);

setupTest(code, 'TSType', undefined, true);

setupTest(code, 'TSTypeAliasDeclaration', undefined, true);

setupTest(code, 'TSTypeAnnotation', undefined, true);

setupTest(code, 'TSTypeAssertion', undefined, true);

setupTest(code, 'TSTypeElement', undefined, true);

setupTest(code, 'TSTypeLiteral', undefined, true);

setupTest(code, 'TSTypeOperator', undefined, true);

setupTest(code, 'TSTypeParameter', undefined, true);

setupTest(code, 'TSTypeParameterDeclaration', undefined, true);

setupTest(code, 'TSTypeParameterInstantiation', undefined, true);

setupTest(code, 'TSTypePredicate', undefined, true);

setupTest(code, 'TSTypeQuery', undefined, true);

setupTest(code, 'TSTypeReference', undefined, true);

setupTest(code, 'TSUndefinedKeyword', undefined, true);

setupTest(code, 'TSUnionType', undefined, true);

setupTest(code, 'TSUnknownKeyword', undefined, true);

setupTest(code, 'TSVoidKeyword', undefined, true);

setupTest(code, 'TaggedTemplateExpression', undefined, true);

setupTest(code, 'TemplateElement', undefined, true);

setupTest(code, 'TemplateLiteral', undefined, true);

setupTest(code, 'Terminatorless', undefined, true);

setupTest(code, 'ThisExpression', undefined, true);

setupTest(code, 'ThisTypeAnnotation', undefined, true);

setupTest(code, 'ThrowStatement', undefined, true);

setupTest(code, 'TryStatement', undefined, true);

setupTest(code, 'TupleExpression', undefined, true);

setupTest(code, 'TupleTypeAnnotation', undefined, true);

setupTest(code, 'TypeAlias', undefined, true);

setupTest(code, 'TypeAnnotation', undefined, true);

setupTest(code, 'TypeCastExpression', undefined, true);

setupTest(code, 'TypeParameter', undefined, true);

setupTest(code, 'TypeParameterDeclaration', undefined, true);

setupTest(code, 'TypeParameterInstantiation', undefined, true);

setupTest(code, 'TypeofTypeAnnotation', undefined, true);

setupTest(code, 'UnaryExpression', undefined, true);

setupTest(code, 'UnaryLike', undefined, true);

setupTest(code, 'UnionTypeAnnotation', undefined, true);

setupTest(code, 'UpdateExpression', undefined, true);

setupTest(code, 'UserWhitespacable', undefined, true);

setupTest(code, 'V8IntrinsicIdentifier', undefined, true);

setupTest(code, 'VariableDeclaration', undefined, true);

setupTest(code, 'VariableDeclarator', undefined, true);

setupTest(code, 'Variance', undefined, true);

setupTest(code, 'VoidTypeAnnotation', undefined, true);

setupTest(code, 'While', undefined, true);

setupTest(code, 'WhileStatement', undefined, true);

setupTest(code, 'WithStatement', undefined, true);

setupTest(code, 'YieldExpression', undefined, true);

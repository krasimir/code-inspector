import { setupTest } from '../__helpers__';

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
  left: { end: [1, 2], start: [1, 1], text: 'a', type: 'Identifier' },
  right: { end: [1, 7], start: [1, 5], text: 10, type: 'NumericLiteral' },
  start: [1, 1],
  text: '=',
  type: 'AssignmentExpression',
});

setupTest('', 'AssignmentPattern', undefined, true);

setupTest('', 'AwaitExpression', undefined, true);

setupTest('', 'BigIntLiteral', undefined, true);

setupTest('', 'Binary', undefined, true);

setupTest('', 'BinaryExpression', undefined, true);

setupTest('', 'BindExpression', undefined, true);

setupTest('', 'Block', undefined, true);

setupTest('', 'BlockParent', undefined, true);

setupTest('', 'BlockStatement', undefined, true);

setupTest('', 'BooleanLiteral', undefined, true);

setupTest('', 'BooleanLiteralTypeAnnotation', undefined, true);

setupTest('', 'BooleanTypeAnnotation', undefined, true);

setupTest('', 'BreakStatement', undefined, true);

setupTest('', 'CallExpression', undefined, true);

setupTest('', 'CatchClause', undefined, true);

setupTest('', 'Class', undefined, true);

setupTest('', 'ClassBody', undefined, true);

setupTest('', 'ClassDeclaration', undefined, true);

setupTest('', 'ClassExpression', undefined, true);

setupTest('', 'ClassImplements', undefined, true);

setupTest('', 'ClassMethod', undefined, true);

setupTest('', 'ClassPrivateMethod', undefined, true);

setupTest('', 'ClassPrivateProperty', undefined, true);

setupTest('', 'ClassProperty', undefined, true);

setupTest('', 'CompletionStatement', undefined, true);

setupTest('', 'Conditional', undefined, true);

setupTest('', 'ConditionalExpression', undefined, true);

setupTest('', 'ContinueStatement', undefined, true);

setupTest('', 'DebuggerStatement', undefined, true);

setupTest('', 'Declaration', undefined, true);

setupTest('', 'DeclareClass', undefined, true);

setupTest('', 'DeclareExportAllDeclaration', undefined, true);

setupTest('', 'DeclareExportDeclaration', undefined, true);

setupTest('', 'DeclareFunction', undefined, true);

setupTest('', 'DeclareInterface', undefined, true);

setupTest('', 'DeclareModule', undefined, true);

setupTest('', 'DeclareModuleExports', undefined, true);

setupTest('', 'DeclareOpaqueType', undefined, true);

setupTest('', 'DeclareTypeAlias', undefined, true);

setupTest('', 'DeclareVariable', undefined, true);

setupTest('', 'DeclaredPredicate', undefined, true);

setupTest('', 'Decorator', undefined, true);

setupTest('', 'Directive', undefined, true);

setupTest('', 'DirectiveLiteral', undefined, true);

setupTest('', 'DoExpression', undefined, true);

setupTest('', 'DoWhileStatement', undefined, true);

setupTest('', 'EmptyStatement', undefined, true);

setupTest('', 'EmptyTypeAnnotation', undefined, true);

setupTest('', 'EnumBody', undefined, true);

setupTest('', 'EnumBooleanBody', undefined, true);

setupTest('', 'EnumBooleanMember', undefined, true);

setupTest('', 'EnumDeclaration', undefined, true);

setupTest('', 'EnumDefaultedMember', undefined, true);

setupTest('', 'EnumMember', undefined, true);

setupTest('', 'EnumNumberBody', undefined, true);

setupTest('', 'EnumNumberMember', undefined, true);

setupTest('', 'EnumStringBody', undefined, true);

setupTest('', 'EnumStringMember', undefined, true);

setupTest('', 'EnumSymbolBody', undefined, true);

setupTest('', 'ExistsTypeAnnotation', undefined, true);

setupTest('', 'ExportAllDeclaration', undefined, true);

setupTest('', 'ExportDeclaration', undefined, true);

setupTest('', 'ExportDefaultDeclaration', undefined, true);

setupTest('', 'ExportDefaultSpecifier', undefined, true);

setupTest('', 'ExportNamedDeclaration', undefined, true);

setupTest('', 'ExportNamespaceSpecifier', undefined, true);

setupTest('', 'ExportSpecifier', undefined, true);

setupTest('', 'Expression', undefined, true);

setupTest('', 'ExpressionStatement', undefined, true);

setupTest('', 'ExpressionWrapper', undefined, true);

setupTest('', 'File', undefined, true);

setupTest('', 'Flow', undefined, true);

setupTest('', 'FlowBaseAnnotation', undefined, true);

setupTest('', 'FlowDeclaration', undefined, true);

setupTest('', 'FlowPredicate', undefined, true);

setupTest('', 'FlowType', undefined, true);

setupTest('', 'For', undefined, true);

setupTest('', 'ForInStatement', undefined, true);

setupTest('', 'ForOfStatement', undefined, true);

setupTest('', 'ForStatement', undefined, true);

setupTest('', 'ForXStatement', undefined, true);

setupTest('', 'Function', undefined, true);

setupTest('', 'FunctionDeclaration', undefined, true);

setupTest('', 'FunctionExpression', undefined, true);

setupTest('', 'FunctionParent', undefined, true);

setupTest('', 'FunctionTypeAnnotation', undefined, true);

setupTest('', 'FunctionTypeParam', undefined, true);

setupTest('', 'GenericTypeAnnotation', undefined, true);

setupTest('', 'Identifier', undefined, true);

setupTest('', 'IfStatement', undefined, true);

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

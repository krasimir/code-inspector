# CodeInspector

Dependencies free static analysis of your code. Understands JavaScript (JSX, TypeScript). Demo [here](https://inspector.now.sh/).

  - [Installation](#installation)
  - [Usage](#usage)
  - [How it works](#how-it-works)
  - [API](#api)

## Installation

It's on [npm](https://www.npmjs.com/package/code-inspector) so `npm i code-inspector` or `yarn add code-inspector` will do the trick.

The library works in a browser too. It's of course a bit heavy. There is a client-side bundle here [unpkg.com/code-inspector@latest/browser/code-inspector.js](https://unpkg.com/code-inspector@1.1.8/browser/code-inspector.js). Once you load the file you'll have a `CodeInspector` global variable available.

## Usage

Assume that we have the following code:

```js
// code.js
function print(name) {
  const format = str => str.toUpperCase();
  console.log(format(name));
}
```

And we run it through the inspector's `analyze` method:

```js
import CodeInspector from 'code-inspector';

const analysis = CodeInspector.analyze(code);
console.log(JSON.stringify(analysis))
```

The result will be:

```json
{
  "ast": {...},
  "nodes": [
    { "type": "Program", "text": "Program", "start": [ 1, 1 ], "end": [ 4, 2 ], "key": "Program1:14:2", "nesting": 0 },
    { "type": "FunctionDeclaration", "text": "print(name)", "start": [ 1, 1 ], "end": [ 4, 2 ], "key": "FunctionDeclaration1:14:2", "nesting": 1 },
    { "type": "Identifier", "text": "print", "start": [ 1, 10 ], "end": [ 1, 15 ], "key": "Identifier1:101:15", "nesting": 1 },
    { "type": "Identifier", "text": "name", "start": [ 1, 16 ], "end": [ 1, 20 ], "key": "Identifier1:161:20", "nesting": 1 },
    { "type": "BlockStatement", "text": "⊏…⊐", "start": [ 1, 22 ], "end": [ 4, 2 ], "key": "BlockStatement1:224:2", "nesting": 1 },
    { "type": "VariableDeclaration", "text": "format", "start": [ 2, 3 ], "end": [ 2, 43 ], "key": "VariableDeclaration2:32:43", "nesting": 1 },
    { "type": "VariableDeclarator", "text": "format", "start": [ 2, 9 ], "end": [ 2, 42 ], "key": "VariableDeclarator2:92:42", "nesting": 1 },
    { "type": "Identifier", "text": "format", "start": [ 2, 9 ], "end": [ 2, 15 ], "key": "Identifier2:92:15", "nesting": 1 },
    { "type": "ArrowFunctionExpression", "text": "format(str)", "start": [ 2, 18 ], "end": [ 2, 42 ], "key": "ArrowFunctionExpression2:182:42", "nesting": 2 },
    { "type": "Identifier", "text": "str", "start": [ 2, 18 ], "end": [ 2, 21 ], "key": "Identifier2:182:21", "nesting": 2 },
    { "type": "CallExpression", "text": "str.toUpperCase()", "start": [ 2, 25 ], "end": [ 2, 42 ], "key": "CallExpression2:252:42", "nesting": 2 },
    { "type": "MemberExpression", "text": "str.toUpperCase", "start": [ 2, 25 ], "end": [ 2, 40 ], "key": "MemberExpression2:252:40", "nesting": 2 },
    { "type": "Identifier", "text": "str", "start": [ 2, 25 ], "end": [ 2, 28 ], "key": "Identifier2:252:28", "nesting": 2 },
    { "type": "Identifier", "text": "toUpperCase", "start": [ 2, 29 ], "end": [ 2, 40 ], "key": "Identifier2:292:40", "nesting": 2 },
    { "type": "ExpressionStatement", "text": "console.log(…)", "start": [ 3, 3 ], "end": [ 3, 29 ], "key": "ExpressionStatement3:33:29", "nesting": 1 },
    { "type": "CallExpression", "text": "console.log(…)", "start": [ 3, 3 ], "end": [ 3, 28 ], "key": "CallExpression3:33:28", "nesting": 1 },
    { "type": "MemberExpression", "text": "console.log", "start": [ 3, 3 ], "end": [ 3, 14 ], "key": "MemberExpression3:33:14", "nesting": 1 },
    { "type": "Identifier", "text": "console", "start": [ 3, 3 ], "end": [ 3, 10 ], "key": "Identifier3:33:10", "nesting": 1 },
    { "type": "Identifier", "text": "log", "start": [ 3, 11 ], "end": [ 3, 14 ], "key": "Identifier3:113:14", "nesting": 1 },
    { "type": "CallExpression", "text": "format(…)", "start": [ 3, 15 ], "end": [ 3, 27 ], "key": "CallExpression3:153:27", "nesting": 1 },
    { "type": "Identifier", "text": "format", "start": [ 3, 15 ], "end": [ 3, 21 ], "key": "Identifier3:153:21", "nesting": 1 },
    { "type": "Identifier", "text": "name", "start": [ 3, 22 ], "end": [ 3, 26 ], "key": "Identifier3:223:26", "nesting": 1 }
  ],
  "scopes": [
    { "type": "Program", "text": "Program", "start": [ 1, 1 ], "end": [ 4, 2 ], "key": "Program1:14:2", "nesting": 0 },
    { "type": "FunctionDeclaration", "text": "print(name)", "start": [ 1, 1 ], "end": [ 4, 2 ], "key": "FunctionDeclaration1:14:2", "nesting": 1 },
    { "type": "ArrowFunctionExpression", "text": "format(str)", "start": [ 2, 18 ], "end": [ 2, 42 ], "key": "ArrowFunctionExpression2:182:42", "nesting": 2 }
  ],
  "variables": [
    { "type": "VariableDeclarator", "text": "format", "start": [ 2, 9 ], "end": [ 2, 42 ], "key": "VariableDeclarator2:92:42", "nesting": 1 }
  ]
}
```

## How it works

It is based on [@babel/traverse](https://www.npmjs.com/package/@babel/traverse), [@babel/parser](https://www.npmjs.com/package/@babel/parser), and [@babel/types](https://www.npmjs.com/package/@babel/types). It gets your code and traverses the AST tree normalizing the nodes.

## API

Code inspector exposes the following methods:

* `analyze` - Analyzes the providing code.
* `sort` - Sorts nodes by their starting position.
* `isVariable` - Accepts a node and returns true or false if the node represents a variable.

```
export function analyze(code: string): Analysis;
export function sort(nodes: NormalizedNode[]): NormalizedNode[];
export function isVariable(node: NormalizedNode): boolean;

export interface Analysis {
  ast: any;
  nodes: NormalizedNode[];
  scopes: NormalizedNode[];
  variables: NormalizedNode[];
}

export interface NormalizedNode {
  text: string | number | boolean;
  type: string;
  key?: string;
  start?: [number | undefined, number | undefined];
  end?: [number | undefined, number | undefined];
  left?: string | number | boolean;
  right?: string | number | boolean;
  nesting?: number;
}
```
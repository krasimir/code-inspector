# code-inspector

Dependencies free static analysis of your code.

- [code-inspector](#code-inspector)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Using it in a browser](#using-it-in-a-browser)
  - [How it works](#how-it-works)
  - [API](#api)

## Installation

It's on [npm](https://www.npmjs.com/package/code-inspector) so `npm i code-inspector` or `yarn add code-inspector` will do the trick.

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
    { "type": "Program", "text": "Program", "start": [1, 1], "end": [8, 1] },
    { "type": "FunctionDeclaration", "text": "print<name>", "start": [3, 2], "end": [6, 4] },
    { "type": "Identifier", "text": "print", "start": [3, 11], "end": [3, 16] },
    { "type": "Identifier", "text": "name", "start": [3, 17], "end": [3, 21] },
    { "type": "BlockStatement", "text": "⊏…⊐", "start": [3, 23], "end": [6, 4] },
    { "type": "VariableDeclaration", "text": "format", "start": [4, 6], "end": [4, 46] },
    { "type": "VariableDeclarator", "text": "format", "start": [4, 12], "end": [4, 45] },
    { "type": "Identifier", "text": "format", "start": [4, 12], "end": [4, 18] },
    { "type": "ArrowFunctionExpression", "text": "format<str>", "start": [4, 21], "end": [4, 45] },
    { "type": "Identifier", "text": "str", "start": [4, 21], "end": [4, 24] },
    { "type": "CallExpression", "text": "str.toUpperCase()", "start": [4, 28], "end": [4, 45] },
    { "type": "MemberExpression", "text": "str.toUpperCase", "start": [4, 28], "end": [4, 43] },
    { "type": "Identifier", "text": "str", "start": [4, 28], "end": [4, 31] },
    { "type": "Identifier", "text": "toUpperCase", "start": [4, 32], "end": [4, 43] },
    { "type": "ExpressionStatement", "text": "console.log(…)", "start": [5, 6], "end": [5, 32] },
    { "type": "CallExpression", "text": "console.log(…)", "start": [5, 6], "end": [5, 31] },
    { "type": "MemberExpression", "text": "console.log", "start": [5, 6], "end": [5, 17] },
    { "type": "Identifier", "text": "console", "start": [5, 6], "end": [5, 13] },
    { "type": "Identifier", "text": "log", "start": [5, 14], "end": [5, 17] },
    { "type": "CallExpression", "text": "format(…)", "start": [5, 18], "end": [5, 30] },
    { "type": "Identifier", "text": "format", "start": [5, 18], "end": [5, 24] },
    { "type": "Identifier", "text": "name", "start": [5, 25], "end": [5, 29] }
  ],
  "scopes": [
    { "type": "FunctionDeclaration", "text": "print<name>", "start": [3, 2], "end": [6, 4], "nesting": 1 },
    { "type": "ArrowFunctionExpression", "text": "format<str>", "start": [4, 21], "end": [4, 45], "nesting": 2 }
  ]
}
```

## Using it in a browser

The library works in a browser too. It's of course a bit heavy. There is a client-side bundle here [unpkg.com/code-inspector@latest/browser/code-inspector.js](https://unpkg.com/code-inspector@1.1.8/browser/code-inspector.js). Once you load the file you'll have a `CodeInspector` global variable available.

## How it works

It is based on [@babel/traverse](https://www.npmjs.com/package/@babel/traverse), [@babel/parser](https://www.npmjs.com/package/@babel/parser), and [@babel/types](https://www.npmjs.com/package/@babel/types). It gets your code and traverses the AST tree normalizing the nodes.

## API

```
export function analyze(code: string): Analysis;

export interface Analysis {
  ast: any;
  nodes: NormalizedNode[];
  scopes: NormalizedNode[];
}

export interface NormalizedNode {
  text: string | number | boolean;
  type: string;
  start?: [number | undefined, number | undefined];
  end?: [number | undefined, number | undefined];
  left?: string | number | boolean;
  right?: string | number | boolean;
  nesting?: number;
}
```
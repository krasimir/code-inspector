import fs from 'fs';
import clipboardy from 'clipboardy';

import { analyze, sort, isVariable } from '../index';
import treeExpectation from '../__data__/tree.spec.json';
import treeExpectationFunctionVariables from '../__data__/function.variables.json';

const code2 = fs
  .readFileSync(`${__dirname}/code-samples/code2.ts`)
  .toString('utf8');

const code3 = fs
  .readFileSync(`${__dirname}/code-samples/code3.ts`)
  .toString('utf8');

const code5 = fs
  .readFileSync(`${__dirname}/code-samples/code5.ts`)
  .toString('utf8');

const code9 = fs
  .readFileSync(`${__dirname}/code-samples/code9.ts`)
  .toString('utf8');

const code10 = fs
  .readFileSync(`${__dirname}/code-samples/code10.ts`)
  .toString('utf8');

const code11 = fs
  .readFileSync(`${__dirname}/code-samples/code11.ts`)
  .toString('utf8');

const code12 = fs
  .readFileSync(`${__dirname}/code-samples/code12.ts`)
  .toString('utf8');

const code14 = fs
  .readFileSync(`${__dirname}/code-samples/code14.ts`)
  .toString('utf8');

describe('Given the code-inspector library', () => {
  describe('when passing some code', () => {
    it('should return all the ast nodes', () => {
      const { nodes } = analyze(code2);
      const res = nodes.map(
        ({ type, nesting, scopePath }) => `${nesting} ${type}`
      );
      expect(res).toStrictEqual([
        '0 Program',
        '1 VariableDeclaration',
        '1 VariableDeclarator',
        '1 Identifier',
        '1 NumericLiteral',
        '1 ClassDeclaration',
        '2 Identifier',
        '2 ClassBody',
        '2 ClassProperty',
        '2 Identifier',
        '2 NumericLiteral',
        '2 ClassMethod',
        '3 Identifier',
        '3 BlockStatement',
        '3 ReturnStatement',
        '3 StringLiteral',
      ]);
    });
    it('should return all the scope nodes', () => {
      const { scopes } = analyze(code3);
      const expectation = scopes.map(
        ({ text, nesting }) => `${text} ${nesting}`
      );
      expect(expectation).toStrictEqual([
        'Program 0',
        'NormalizeBoo(a) 1',
        'somethingElse(a, b) 1',
        'getAnswer(…) callback 2',
        'Moo 1',
        'Moo.go(c, d) 2',
        'foo() 3',
        'boo() 3',
        'DATA.forEach(…) callback 4',
        'boo() 1',
      ]);
    });
    it('should return all the variable nodes', () => {
      const { variables } = analyze(code9);
      const expectation = variables.map(
        ({ text, nesting }) => `${text} ${nesting}`
      );
      expect(expectation).toStrictEqual([
        'A 1',
        'b 1',
        'c 1',
        'd:number[] 1',
        'foobar() 1',
        'e 2',
        'f 2',
        'i 2',
      ]);
    });
    it('should sort the nodes by location', () => {
      const { variables, scopes } = analyze(code10);
      const expectation = sort([...variables, ...scopes]).map(
        ({ text, type, nesting }) => `${type} - ${text}`
      );
      // console.log(JSON.stringify(expectation, null, 2));
      expect(expectation).toStrictEqual([
        'Program - Program',
        'FunctionDeclaration - foobar()',
        'VariableDeclarator - ANSWER',
        'FunctionDeclaration - barfoo()',
        'VariableDeclarator - AAA',
        'ClassDeclaration - MyClass',
        'ClassMethod - MyClass.greeting()',
        'VariableDeclarator - text',
      ]);
    });
    it('should allow us to check if the node is a variable', () => {
      const { variables, scopes } = analyze(code10);
      const expectation = sort([...variables, ...scopes]).map(
        node => `${node.text} - ${isVariable(node)}`
      );
      // console.log(JSON.stringify(expectation, null, 2));
      expect(expectation).toStrictEqual([
        'Program - false',
        'foobar() - true',
        'ANSWER - true',
        'barfoo() - true',
        'AAA - true',
        'MyClass - false',
        'MyClass.greeting() - false',
        'text - true',
      ]);
    });

    it('should set a proper nesting for the variables', () => {
      const { variables, scopes } = analyze(code11);
      const expectation = sort([...variables, ...scopes]).map(
        node => `${node.text} - ${isVariable(node)} - ${node.nesting}`
      );
      expect(expectation).toStrictEqual([
        'Program - false - 0',
        'createGraphItem() - true - 1',
        'label - true - 2',
      ]);
    });

    it('should set a proper path and scopePath', () => {
      const { nodes } = analyze(code2);
      const expectation1 = nodes.map(node => node.path);
      const expectation2 = nodes.map(node => node.scopePath);
      // console.log(JSON.stringify(expectation1, null, 2));
      // console.log(JSON.stringify(expectation2, null, 2));
      expect(expectation1).toStrictEqual([
        '',
        'Program-1:1-10:1',
        'Program-1:1-10:1.VariableDeclaration-1:1-1:19',
        'Program-1:1-10:1.VariableDeclaration-1:1-1:19.VariableDeclarator-1:7-1:18',
        'Program-1:1-10:1.VariableDeclaration-1:1-1:19.VariableDeclarator-1:7-1:18',
        'Program-1:1-10:1',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2.ClassBody-3:11-9:2',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2.ClassBody-3:11-9:2.ClassProperty-4:3-4:19',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2.ClassBody-3:11-9:2.ClassProperty-4:3-4:19',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2.ClassBody-3:11-9:2',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2.ClassBody-3:11-9:2.ClassMethod-6:3-8:4',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2.ClassBody-3:11-9:2.ClassMethod-6:3-8:4',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2.ClassBody-3:11-9:2.ClassMethod-6:3-8:4.BlockStatement-6:15-8:4',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2.ClassBody-3:11-9:2.ClassMethod-6:3-8:4.BlockStatement-6:15-8:4.ReturnStatement-7:5-7:17',
      ]);
      expect(expectation2).toStrictEqual([
        '',
        'Program-1:1-10:1',
        'Program-1:1-10:1',
        'Program-1:1-10:1',
        'Program-1:1-10:1',
        'Program-1:1-10:1',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2.ClassMethod-6:3-8:4',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2.ClassMethod-6:3-8:4',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2.ClassMethod-6:3-8:4',
        'Program-1:1-10:1.ClassDeclaration-3:1-9:2.ClassMethod-6:3-8:4',
      ]);
    });
    it('should return a tree', () => {
      const { tree } = analyze(code12);

      // clipboardy.writeSync(JSON.stringify(tree, null, 2));
      expect(tree).toStrictEqual(treeExpectation);
    });
    it('should properly define variables out of the function arguments', () => {
      const { tree } = analyze(code14);

      clipboardy.writeSync(JSON.stringify(tree, null, 2));
      expect(tree).toStrictEqual(treeExpectationFunctionVariables);
    });
  });
});

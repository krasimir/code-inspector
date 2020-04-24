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
      const res = nodes.map(({ type, scopePath }) => `${type}`);
      expect(res).toStrictEqual([
        'Program',
        'VariableDeclaration',
        'VariableDeclarator',
        'Identifier',
        'NumericLiteral',
        'ClassDeclaration',
        'Identifier',
        'ClassBody',
        'ClassProperty',
        'Identifier',
        'NumericLiteral',
        'ClassMethod',
        'Identifier',
        'BlockStatement',
        'ReturnStatement',
        'StringLiteral',
      ]);
    });
    it('should return all the scope nodes', () => {
      const { scopes } = analyze(code3);
      const expectation = scopes.map(({ text }) => text);
      expect(expectation).toStrictEqual([
        'Program',
        'NormalizeBoo(a)',
        'somethingElse(a, b)',
        'getAnswer(…) callback',
        'Moo',
        'Moo.go(c, d)',
        'foo()',
        'boo()',
        'DATA.forEach(…) callback',
        'boo()',
      ]);
    });
    it('should properly set the variables', () => {
      const { variables, nodes } = analyze(code9);
      const getNodeByKey = key => nodes.find(n => n.key === key);
      const expectation = variables.map(({ text }) => text);
      const nodesAndTheirVariables = nodes
        .filter(n => n.variables && n.variables.length > 0)
        .map(n => `${n.type} ${n.variables.map(vn => getNodeByKey(vn).text)}`);
      expect(expectation).toStrictEqual([
        'A',
        'b',
        'c',
        'd',
        'foobar(valueA, valueB)',
        'valueA',
        'valueB',
        'e',
        'f',
        'i',
      ]);
      expect(nodesAndTheirVariables).toStrictEqual([
        'Program A,b,c,d,foobar(valueA, valueB)',
        'FunctionDeclaration valueA,valueB,e,f,i',
      ]);
    });
    it('should sort the nodes by location', () => {
      const { variables, scopes } = analyze(code10);
      const expectation = sort([...variables, ...scopes]).map(
        ({ text, type }) => `${type} - ${text}`
      );
      // console.log(JSON.stringify(expectation, null, 2));
      expect(expectation).toStrictEqual([
        'Program - Program',
        'FunctionDeclaration - foobar()',
        'VariableDeclaration - ANSWER',
        'FunctionDeclaration - barfoo()',
        'VariableDeclaration - AAA',
        'ClassDeclaration - MyClass',
        'ClassMethod - MyClass.greeting()',
        'VariableDeclaration - text',
      ]);
    });

    it('should allow us to check if the node is a variable', () => {
      const { nodes } = analyze(code10);
      const expectation = nodes.filter(isVariable).map(node => node.text);
      // console.log(JSON.stringify(expectation, null, 2));
      expect(expectation).toStrictEqual([
        'foobar()',
        'ANSWER',
        'barfoo()',
        'AAA',
        'text',
      ]);
    });

    it('should export properly only variables', () => {
      const { variables } = analyze(code11);
      const expectation = variables.map(node => node.text);
      expect(expectation).toStrictEqual(['createGraphItem()', 'label']);
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

      // clipboardy.writeSync(JSON.stringify(tree, null, 2));
      expect(tree).toStrictEqual(treeExpectationFunctionVariables);
    });
  });
});

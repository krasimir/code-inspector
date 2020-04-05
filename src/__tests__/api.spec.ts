import fs from 'fs';
import { analyze, sort, isVariable } from '../index';

const code2 = fs
  .readFileSync(`${__dirname}/code-samples/code2.ts`)
  .toString('utf8');

const code3 = fs
  .readFileSync(`${__dirname}/code-samples/code3.ts`)
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

describe('Given the code-inspector library', () => {
  describe('when passing some code', () => {
    it('should return all the ast nodes', () => {
      const { nodes } = analyze(code2);
      const res = nodes.map(({ type, nesting }) => `${nesting} ${type}`);
      // console.log(JSON.stringify(res, null, 2));
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
        'e 2',
        'f 2',
        'i 3',
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
        'foobar() - false',
        'ANSWER - true',
        'barfoo() - false',
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
        'createGraphItem() - false - 1',
        'label - true - 2',
      ]);
    });
  });
});

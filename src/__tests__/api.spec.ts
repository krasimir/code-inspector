import fs from 'fs';
import { analyze } from '../index';

const code2 = fs
  .readFileSync(`${__dirname}/code-samples/code2.ts`)
  .toString('utf8');

const code3 = fs
  .readFileSync(`${__dirname}/code-samples/code3.ts`)
  .toString('utf8');

describe('Given the code-inspector library', () => {
  describe('when passing some code', () => {
    it('should return all the ast nodes', () => {
      const { nodes } = analyze(code2);
      expect(nodes.map(({ type }) => type)).toStrictEqual([
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
      const expectation = scopes.map(
        ({ text, nesting }) => `${text} ${nesting}`
      );
      expect(expectation).toStrictEqual([
        'NormalizeBoo<a> 1',
        'somethingElse<a, b> 1',
        'getAnswer(…) callback 2',
        'Moo 1',
        'Moo.go<c, d> 2',
        'foo 3',
        'boo 3',
        'DATA.forEach(…) callback 4',
        'boo 1',
      ]);
    });
  });
});

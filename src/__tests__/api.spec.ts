import fs from 'fs';
import { analyze } from '../index';

const code = fs
  .readFileSync(`${__dirname}/code-samples/code2.ts`)
  .toString('utf8');

describe('Given the code-inspector library', () => {
  describe('when passing some code', () => {
    it('should return all the ast nodes', () => {
      const { nodes } = analyze(code);
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
  });
});

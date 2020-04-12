import fs from 'fs';
import { analyze } from '../index';

const code5 = fs
  .readFileSync(`${__dirname}/code-samples/code5.ts`)
  .toString('utf8');

describe('Given the code5.tsx code sample', () => {
  describe('when analyzing the code', () => {
    it('should return all the scope nodes', () => {
      const { scopes } = analyze(code5);
      const expectation = scopes.map(({ text, type }) => `${type} | ${text}`);
      expect(expectation).toStrictEqual([
        'Program | Program',
        'ArrowFunctionExpression | util()',
        'FunctionDeclaration | doSomething()',
        'ArrowFunctionExpression | new App(…) argument',
      ]);
    });
  });
});

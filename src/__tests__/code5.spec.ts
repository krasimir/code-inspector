import fs from 'fs';
import { analyze } from '../index';

const code5 = fs
  .readFileSync(`${__dirname}/code-samples/code5.ts`)
  .toString('utf8');

describe('Given the code5.tsx code sample', () => {
  describe('when analyzing the code', () => {
    it('should return all the scope nodes', () => {
      const { scopes } = analyze(code5);
      const expectation = scopes.map(
        ({ text, nesting, type }) => `${type} | ${text} ${nesting}`
      );
      expect(expectation).toStrictEqual([
        'Program | Program 0',
        'ArrowFunctionExpression | util() 1',
        'FunctionDeclaration | doSomething() 2',
        'ArrowFunctionExpression | new App(…) argument 3',
      ]);
    });
  });
});

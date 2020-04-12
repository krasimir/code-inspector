import fs from 'fs';
import { analyze } from '../index';

const code7 = fs
  .readFileSync(`${__dirname}/code-samples/code7.ts`)
  .toString('utf8');

describe('Given the code7.tsx code sample', () => {
  describe('when analyzing the code', () => {
    it('should return all the scope nodes', () => {
      const { scopes } = analyze(code7);
      const expectation = scopes.map(({ text, type }) => `${type} | ${text}`);
      // console.log(JSON.stringify(expectation, null, 2));
      expect(expectation).toStrictEqual([
        'Program | Program',
        'FunctionDeclaration | parseItems(items:any[], parent:Traverse.Node, grandParent:Traverse.Node, delimiter=",")',
        'ArrowFunctionExpression | items.map(…) callback',
      ]);
    });
  });
});

import fs from 'fs';
import { analyze } from '../index';

const code8 = fs
  .readFileSync(`${__dirname}/code-samples/code8.jsx`)
  .toString('utf8');

describe('Given the code8.tsx code sample', () => {
  describe('when analyzing the code', () => {
    it('should return all the scope nodes', () => {
      const { nodes, ast } = analyze(code8);
      const expectation = nodes.map(
        ({ text, nesting, type }) => `${type} | ${text} ${nesting}`
      );
      // console.log(JSON.stringify(expectation, null, 2));
      expect(expectation).toStrictEqual([
        'Program | Program 0',
        'ImportDeclaration | useState ⤺ "react" 1',
        'ImportSpecifier | useState 1',
        'Identifier | useState 1',
        'StringLiteral | "react" 1',
      ]);
    });
  });
});

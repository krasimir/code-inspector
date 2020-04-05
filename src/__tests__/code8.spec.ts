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
        'ImportDeclaration | useState ⤺ "react" 0',
        'ImportSpecifier | useState 0',
        'Identifier | useState 0',
        'StringLiteral | "react" 0',
      ]);
    });
  });
});

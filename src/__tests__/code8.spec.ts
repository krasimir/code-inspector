import fs from 'fs';
import { analyze } from '../index';

const code8 = fs
  .readFileSync(`${__dirname}/code-samples/code8.jsx`)
  .toString('utf8');

describe('Given the code8.tsx code sample', () => {
  describe('when analyzing the code', () => {
    it('should not return duplicated nodes', () => {
      const { nodes } = analyze(code8);
      const expectation = nodes.map(({ text, type }) => `${type} | ${text}`);
      // console.log(JSON.stringify(expectation, null, 2));
      expect(expectation).toStrictEqual([
        'Program | Program',
        'ImportDeclaration | useState ⤺ "react"',
        'ImportSpecifier | useState',
        'Identifier | useState',
        'StringLiteral | "react"',
      ]);
    });
  });
});

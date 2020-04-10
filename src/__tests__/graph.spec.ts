import fs from 'fs';
import { analyze, toMermaidGraph } from '../index';

const htmlFile = `${__dirname}/../../demo/graphDemo.html`;

const code12 = fs
  .readFileSync(`${__dirname}/code-samples/code12.ts`)
  .toString('utf8');

describe('Given the code12.tsx code sample', () => {
  describe('when analyzing the code', () => {
    it('should return a tree', () => {
      const { tree } = analyze(code12);

      console.log(tree);
    });
  });
});

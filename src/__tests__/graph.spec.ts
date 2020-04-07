import fs from 'fs';
import { analyze, toGraph } from '../index';

const htmlFile = `${__dirname}/../../demo/graphDemo.html`;
const code12 = fs
  .readFileSync(`${__dirname}/code-samples/code12.ts`)
  .toString('utf8');
const graphDemoHTML = fs.readFileSync(htmlFile).toString('utf8');

describe('Given the code12.tsx code sample', () => {
  describe('when transforming the code to a graph', () => {
    it('should return a svg image', () => {
      const { nodes } = analyze(code12);
      const mermaid = toGraph(nodes);
      fs.writeFileSync(
        htmlFile,
        graphDemoHTML
          .replace(
            /<textarea>([\s\S]*)<\/textarea>/gim,
            `<textarea>${code12}</textarea>`
          )
          .replace(
            /<div class="mermaid">([\s\S]*)<\/div>/gim,
            `<div class="mermaid">${mermaid}</div>`
          )
      );
    });
  });
});

import fs from 'fs';
import { analyze, toGraph } from '../index';

const htmlFile = `${__dirname}/../../demo/graphDemo.html`;

const code12 = fs
  .readFileSync(`${__dirname}/code-samples/code12.ts`)
  .toString('utf8');

describe('Given the code12.tsx code sample', () => {
  describe('when transforming the code to a graph', () => {
    it('should return a svg image', () => {
      const graphDemoHTML = fs.readFileSync(htmlFile).toString('utf8');
      const mermaid = toGraph(analyze(code12));
      console.log('------------------------');
      console.log(mermaid);
      fs.writeFileSync(
        htmlFile,
        graphDemoHTML
          .replace(
            /<pre class="js">([\s\S]*)<\/pre>/gim,
            `<pre class="js">${code12}</pre>`
          )
          .replace(
            /<div class="mermaid">([\s\S]*)<\/div>/gim,
            `<div class="mermaid">${mermaid.replace(/</g, '&lt;')}</div>`
          )
          .replace(
            /<section class="preview-in-mermaid">([\s\S]*)<\/section>/gim,
            `<section class="preview-in-mermaid">${mermaid.replace(
              /</g,
              '&lt;'
            )}</section>`
          )
      );
    });
  });
});

import fs from 'fs';
import { analyze, toGraph } from '../index';

const htmlFile = `${__dirname}/../../demo/gojsDemo.html`;

const code12 = fs
  .readFileSync(`${__dirname}/code-samples/code12.ts`)
  .toString('utf8');

describe('Given the code12.tsx code sample', () => {
  describe('when transforming the code to a graph', () => {
    it('should return a svg image', () => {
      const graphDemoHTML = fs.readFileSync(htmlFile).toString('utf8');
      const [nodeData, linkData] = toGraph(analyze(code12));
      // console.log(nodeData);
      // console.log(linkData);
      //       fs.writeFileSync(
      //         htmlFile,
      //         graphDemoHTML.replace(
      //           /<script id="data">([\s\S]*)<\/script>/gim,
      //           `<script id="data">
      //   const nodeData = ${JSON.stringify(nodeData)}

      //   const linkData = ${JSON.stringify(linkData)}

      //   window.addEventListener('load', () => {
      //     init(nodeData, linkData);
      //   });
      // </script>`
      //         )
      //       );
    });
  });
});

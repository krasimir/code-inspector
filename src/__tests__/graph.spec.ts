import fs from "fs";
import { analyze, graph } from "../index";

const JSONFile = `${__dirname}/../../demo/mermaidDemo.json`;
const diagramFile = `${__dirname}/../../demo/mermaid.graph`;

const code12 = fs
  .readFileSync(`${__dirname}/code-samples/code12.ts`)
  .toString("utf8");

describe("Given the code12.tsx code sample", () => {
  describe("when transforming the code to a graph", () => {
    it("should return a svg image", () => {
      const res = analyze(code12);
      // fs.writeFileSync(JSONFile, JSON.stringify(graph.toGraph(res), null, 2));
      fs.writeFileSync(diagramFile, graph.toMermaidDiagram(res));
    });
  });
});

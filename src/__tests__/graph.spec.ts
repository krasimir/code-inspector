import fs from "fs";
import { analyze, toGraph } from "../index";

const JSONFile = `${__dirname}/../../demo/mermaidDemo.json`;

const code12 = fs
  .readFileSync(`${__dirname}/code-samples/code12.ts`)
  .toString("utf8");

describe("Given the code12.tsx code sample", () => {
  describe("when transforming the code to a graph", () => {
    it("should return a svg image", () => {
      const result = toGraph(analyze(code12));
      fs.writeFileSync(JSONFile, JSON.stringify(result, null, 2));
    });
  });
});

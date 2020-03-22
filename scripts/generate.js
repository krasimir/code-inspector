/* eslint-disable prettier/prettier */
const fs = require('fs');

const root = `${__dirname}/../src/`;
const types = require(`${__dirname}/../src/types.json`);

function getCode(type) {
  return `import T from '@babel/types';

import { NormalizedNode } from '../types';

export default function(node: T.${type}): NormalizedNode | undefined {
  return undefined;
}
`;
}

function getTestCode(type) {
   return `setupTest(
  \`
    
\`,
  '${type}',
  undefined,
  true
);
`;
}

console.log('-----------------------');

const parsersCode = `/* eslint-disable prettier/prettier */
// !!!
// This file is auto generated. Do not modify it manually.
// Check out scripts/generate.js file

${types.map(type => `import ${type} from './${type}';`).join('\n')}

const parsers: Record<string, Function> = {
  ${types.map(type => type).join(',\n  ')}
}
export default parsers;
`;
fs.writeFileSync(`${root}parsers/index.ts`, parsersCode);
console.log(`parsers/index.ts saved`);

let totalFilesCreated = 0;
let tests = `import { setupTest } from '../__helpers__';\n\n`;

types.forEach(type => {
  if (type !== '') {
    const file = `${root}parsers/${type}.ts`;
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, getCode(type));
      console.log(`${type}.ts created`);
      totalFilesCreated += 1;
    }
    tests += `${getTestCode(type)  }\n`;
  }
});

if (!fs.existsSync(`${root}__tests__/nodes.spec.ts`)) {
  fs.writeFileSync(`${root}__tests__/nodes.spec.ts`, tests);
  console.log(`__tests__/nodes.spec.ts created`);
  totalFilesCreated += 1;
}

console.log('-----------------------');
console.log(`${totalFilesCreated} files created`);
console.log('-----------------------');

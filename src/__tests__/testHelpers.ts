import fs from 'fs';

export function getCode(filename: string): string {
  return fs
    .readFileSync(`${__dirname}/code-samples/${filename}`)
    .toString('utf8');
}

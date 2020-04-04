import { NormalizedNode } from '../types';
import { analyze } from '../index';

export function setupTest(
  input = '',
  type: string,
  expectation?: NormalizedNode | 'not-found',
  skip = false,
  only = false
) {
  (skip ? xdescribe : describe)(`Given ${type} node`, () => {
    describe(`when normalizing ${type} the node`, () => {
      (only ? fit : it)('should get a proper NormalizedNode object', () => {
        const { nodes } = analyze(input);
        const found = nodes.find(n => n.type === type);
        if (typeof found === 'undefined') {
          expect('not-found').toStrictEqual(expectation);
        } else {
          expect(found).toMatchObject(expectation as Record<string, any>);
        }
      });
    });
  });
}

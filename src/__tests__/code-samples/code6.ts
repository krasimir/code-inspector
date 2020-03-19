import { getCode } from './testHelpers';
import { toAST, analyze } from '../index';

describe('Given the code-inspector library', () => {
  describe('when passing code', () => {
    it('should extract scope breadcrumbs #3', () => {
      const code = getCode('code3.js');
      expect(analyze(code, 12, 5)).toMatchObject({
        breadcrumbs: ['XXX', 'FooBar', 'parse'],
      });
      expect(analyze(code, 12, 62)).toMatchObject({
        breadcrumbs: ['XXX', 'FooBar'],
      });
      expect(analyze(code, 12, 61)).toMatchObject({
        breadcrumbs: ['XXX', 'FooBar', 'parse'],
      });
    });
  });
});

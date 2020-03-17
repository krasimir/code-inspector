import { getCode } from './testHelpers';
import { toAST, analyze } from '../index';

describe('Given the code-inspector library', () => {
  describe('when passing code', () => {
    it('should deliver AST', () => {
      const ast = toAST('var a = 42');
      expect(ast).toMatchObject({
        type: 'File',
        start: 0,
        end: 10,
      });
    });
    it('should extract scope breadcrumbs #1', () => {
      const code = getCode('code1.txt');
      expect(analyze(code, 7, 1)).toMatchObject({
        breadcrumbs: ['App', 'bar'],
      });
      expect(analyze(code, 6, 2)).toMatchObject({
        breadcrumbs: ['App'],
      });
      expect(analyze(code, 8, 5)).toMatchObject({
        breadcrumbs: ['App'],
      });
      expect(analyze(code, 10, 1)).toMatchObject({
        breadcrumbs: [],
      });
      expect(analyze(code, 11, 1)).toMatchObject({
        breadcrumbs: ['Helper'],
      });
      expect(analyze(code, 17, 1)).toMatchObject({
        breadcrumbs: ['util', 'doSomething', 'ƒ'],
      });
      expect(analyze(code, 27, 1)).toMatchObject({
        breadcrumbs: ['Yes'],
      });
      expect(analyze(code, 29, 6)).toMatchObject({
        breadcrumbs: ['h'],
      });
    });
    it('should extract scope breadcrumbs #2', () => {
      const code = getCode('code2.txt');
      expect(analyze(code, 11, 47)).toMatchObject({
        breadcrumbs: ['analyze', '{start,end}'],
      });
      expect(analyze(code, 12, 36)).toMatchObject({
        breadcrumbs: ['analyze', '[a,b]'],
      });
    });
    it('should extract scope breadcrumbs #3', () => {
      const code = getCode('code3.txt');
      expect(analyze(code, 10, 5)).toMatchObject({
        breadcrumbs: ['XXX', 'FooBar', 'parse'],
      });
      expect(analyze(code, 10, 62)).toMatchObject({
        breadcrumbs: ['XXX', 'FooBar'],
      });
      expect(analyze(code, 10, 61)).toMatchObject({
        breadcrumbs: ['XXX', 'FooBar', 'parse', 'ƒ'],
      });
    });
  });
});

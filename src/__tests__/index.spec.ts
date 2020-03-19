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
      const code = getCode('code1.js');
      expect(analyze(code, 9, 1)).toMatchObject({
        breadcrumbs: ['App', 'bar'],
      });
      expect(analyze(code, 8, 2)).toMatchObject({
        breadcrumbs: ['App'],
      });
      expect(analyze(code, 10, 5)).toMatchObject({
        breadcrumbs: ['App'],
      });
      expect(analyze(code, 12, 1)).toMatchObject({
        breadcrumbs: [],
      });
      expect(analyze(code, 13, 1)).toMatchObject({
        breadcrumbs: ['Helper'],
      });
      expect(analyze(code, 19, 1)).toMatchObject({
        breadcrumbs: ['util', 'doSomething'],
      });
      expect(analyze(code, 29, 1)).toMatchObject({
        breadcrumbs: ['Yes'],
      });
      expect(analyze(code, 31, 6)).toMatchObject({
        breadcrumbs: ['h'],
      });
    });
    it('should extract scope breadcrumbs #2', () => {
      const code = getCode('code2.ts');
      expect(analyze(code, 13, 47)).toMatchObject({
        breadcrumbs: ['analyze', 'visit()', 'visitNode'],
      });
      expect(analyze(code, 14, 36)).toMatchObject({
        breadcrumbs: ['analyze', 'visit()', 'visitNode'],
      });
    });
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
    it('should extract scope breadcrumbs #4', () => {
      const code = getCode('code4.ts');
      expect(analyze(code, 6, 56)).toMatchObject({
        breadcrumbs: ['graph', 'entityExists'],
      });
      expect(analyze(code, 7, 43)).toMatchObject({
        breadcrumbs: ['graph', 'entityExists'],
      });
      expect(analyze(code, 10, 33)).toMatchObject({
        breadcrumbs: ['graph', 'itemPosition'],
      });
    });
  });
});

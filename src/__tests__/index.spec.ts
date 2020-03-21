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
    fit('should normalize the AST', () => {
      const code = getCode('code0.js');
      analyze(code, 9, 1);
    });
    xit('should extract scope breadcrumbs #1', () => {
      const code = getCode('code1.js');
      expect(analyze(code, 9, 1)).toMatchObject({
        breadcrumbs: [{ text: 'App' }, { text: 'bar' }],
      });
      expect(analyze(code, 8, 2)).toMatchObject({
        breadcrumbs: [{ text: 'App' }],
      });
      expect(analyze(code, 10, 5)).toMatchObject({
        breadcrumbs: [{ text: 'App' }],
      });
      expect(analyze(code, 12, 1)).toMatchObject({
        breadcrumbs: [],
      });
      expect(analyze(code, 13, 1)).toMatchObject({
        breadcrumbs: [{ text: 'Helper' }],
      });
      expect(analyze(code, 19, 1)).toMatchObject({
        breadcrumbs: [{ text: 'util' }, { text: 'doSomething' }],
      });
      expect(analyze(code, 29, 1)).toMatchObject({
        breadcrumbs: [{ text: 'Yes' }],
      });
      expect(analyze(code, 31, 6)).toMatchObject({
        breadcrumbs: [{ text: 'h' }],
      });
    });
    xit('should extract scope breadcrumbs #2', () => {
      const code = getCode('code2.ts');
      expect(analyze(code, 13, 47)).toMatchObject({
        breadcrumbs: [
          { text: 'analyze' },
          { text: 'visit()' },
          { text: 'visitNode' },
        ],
      });
      expect(analyze(code, 14, 36)).toMatchObject({
        breadcrumbs: [
          { text: 'analyze' },
          { text: 'visit()' },
          { text: 'visitNode' },
        ],
      });
    });
    xit('should extract scope breadcrumbs #3', () => {
      const code = getCode('code3.js');
      expect(analyze(code, 12, 5)).toMatchObject({
        breadcrumbs: [{ text: 'XXX' }, { text: 'FooBar' }, { text: 'parse' }],
      });
      expect(analyze(code, 12, 62)).toMatchObject({
        breadcrumbs: [{ text: 'XXX' }, { text: 'FooBar' }],
      });
      expect(analyze(code, 12, 61)).toMatchObject({
        breadcrumbs: [{ text: 'XXX' }, { text: 'FooBar' }, { text: 'parse' }],
      });
    });
    xit('should extract scope breadcrumbs #4', () => {
      const code = getCode('code4.ts');
      expect(analyze(code, 6, 56)).toMatchObject({
        breadcrumbs: [{ text: 'graph' }, { text: 'entityExists' }],
      });
      expect(analyze(code, 7, 43)).toMatchObject({
        breadcrumbs: [{ text: 'graph' }, { text: 'entityExists' }],
      });
      expect(analyze(code, 10, 33)).toMatchObject({
        breadcrumbs: [{ text: 'graph' }, { text: 'itemPosition' }],
      });
    });
    xit('should extract scope breadcrumbs #5', () => {
      const code = getCode('code5.ts');
      expect(analyze(code, 27, 16)).toMatchObject({
        breadcrumbs: [{ text: 'plugins' }],
      });
      expect(analyze(code, 20, 46)).toMatchObject({
        breadcrumbs: [{ text: 'plugins' }, { text: 'decoratorsBeforeExport' }],
      });
      expect(analyze(code, 65, 24)).toMatchObject({
        breadcrumbs: [{ text: 'extractBreadcrumbsNodes' }, { text: 'up()' }],
      });
      expect(analyze(code, 50, 10)).toMatchObject({
        breadcrumbs: [{ text: 'extractBreadcrumbsNodes' }, { text: 'IGNORE' }],
      });
      expect(analyze(code, 103, 23)).toMatchObject({
        breadcrumbs: [{ text: 'analyze' }],
      });
      expect(analyze(code, 144, 24)).toMatchObject({
        breadcrumbs: [],
      });
      expect(analyze(code, 149, 11)).toMatchObject({
        breadcrumbs: [],
      });
    });
    xit('should extract scope breadcrumbs #6', () => {
      const code = getCode('code6.ts');
      expect(analyze(code, 9, 35)).toMatchObject({
        breadcrumbs: [
          { text: 'describe()' },
          { text: 'it()' },
          { text: 'expect().toMatchObject()' },
          { text: 'breadcrumbs' },
        ],
      });
    });
  });
});

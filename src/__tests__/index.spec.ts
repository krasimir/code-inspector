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
    it('should extract scope breadcrumbs', () => {
      const code = getCode('code1.txt');
      expect(analyze(code, 7)).toMatchObject({
        breadcrumbs: ['App', 'bar'],
      });
      expect(analyze(code, 5)).toMatchObject({
        breadcrumbs: ['App'],
      });
      expect(analyze(code, 10)).toMatchObject({
        breadcrumbs: [],
      });
      expect(analyze(code, 11)).toMatchObject({
        breadcrumbs: ['Helper'],
      });
      expect(analyze(code, 17)).toMatchObject({
        breadcrumbs: ['util', 'doSomething'],
      });
      expect(analyze(code, 22)).toMatchObject({
        breadcrumbs: ['Yes'],
      });
      expect(analyze(code, 24)).toMatchObject({
        breadcrumbs: ['h'],
      });
    });
  });
});

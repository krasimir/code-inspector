import fs from 'fs';
import { analyze } from '../index';

const code4 = fs
  .readFileSync(`${__dirname}/code-samples/code4.tsx`)
  .toString('utf8');

describe('Given the code4.tsx code sample', () => {
  describe('when analyzing the code', () => {
    it('should return all the scope nodes', () => {
      const { scopes } = analyze(code4);
      const expectation = scopes.map(({ text, type }) => `${type} | ${text}`);
      expect(expectation).toStrictEqual([
        'Program | Program',
        'ArrowFunctionExpression | getIcon(type)',
        'FunctionDeclaration | trimText(str, n)',
        'FunctionDeclaration | arrayMove(arr, oldIndex, newIndex)',
        'FunctionDeclaration | createGraphItem(entity, parent)',
        'FunctionDeclaration | addMoreIcon(e)',
        'FunctionDeclaration | decorate()',
        'FunctionDeclaration | setText()',
        'FunctionDeclaration | addBackground()',
        'ArrowFunctionExpression | label.on(…) callback',
        'ArrowFunctionExpression | label.on(…) callback',
        'ObjectMethod | update(…1)',
        'FunctionDeclaration | sortAndPosition()',
        'ArrowFunctionExpression | graph.items.forEach(…) callback',
        'ArrowFunctionExpression | log.forEach(…) callback',
        'FunctionDeclaration | createGraphItems(es, parent)',
        'ArrowFunctionExpression | es.forEach(…) callback',
        'ObjectMethod | entityExists(…1)',
        'ArrowFunctionExpression | this.items.find(…) callback',
        'ObjectMethod | itemPosition(…1)',
        'ArrowFunctionExpression | this.items.findIndex(…) callback',
        'FunctionDeclaration | Graph({entities})',
        'ArrowFunctionExpression | useEffect(…) callback',
      ]);
    });
  });
});

import fs from 'fs';
import { analyze } from '../index';

const code4 = fs
  .readFileSync(`${__dirname}/code-samples/code4.tsx`)
  .toString('utf8');

describe('Given the code4.tsx code sample', () => {
  describe('when analyzing the code', () => {
    it('should return all the scope nodes', () => {
      const { scopes } = analyze(code4);
      const expectation = scopes.map(
        ({ text, nesting, type }) => `${type} | ${text} ${nesting}`
      );
      expect(expectation).toStrictEqual([
        'Program | Program 0',
        'ArrowFunctionExpression | getIcon(type:ItemType) 1',
        'FunctionDeclaration | trimText(str:string, n:number) 1',
        'FunctionDeclaration | arrayMove(arr:Array, oldIndex:number, newIndex:number) 1',
        'FunctionDeclaration | createGraphItem(entity:Entity, parent:string | undefined) 1',
        'FunctionDeclaration | addMoreIcon(e:Entity) 2',
        'FunctionDeclaration | decorate() 2',
        'FunctionDeclaration | setText() 2',
        'FunctionDeclaration | addBackground() 2',
        'ArrowFunctionExpression | label.on(…) callback 3',
        'ArrowFunctionExpression | label.on(…) callback 3',
        'FunctionDeclaration | sortAndPosition() 1',
        'ArrowFunctionExpression | graph.items.forEach(…) callback 2',
        'ArrowFunctionExpression | log.forEach(…) callback 2',
        'FunctionDeclaration | createGraphItems(es:Entity[] | undefined, parent?:string | undefined) 1',
        'ArrowFunctionExpression | es.forEach(…) callback 2',
        'ArrowFunctionExpression | this.items.find(…) callback 1',
        'ArrowFunctionExpression | this.items.findIndex(…) callback 1',
        'FunctionDeclaration | Graph({entities}) 1',
        'ArrowFunctionExpression | useEffect(…) callback 2',
      ]);
    });
  });
});

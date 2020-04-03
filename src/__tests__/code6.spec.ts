import fs from 'fs';
import { analyze } from '../index';

const code6 = fs
  .readFileSync(`${__dirname}/code-samples/code6.jsx`)
  .toString('utf8');

describe('Given the code6.tsx code sample', () => {
  describe('when analyzing the code', () => {
    it('should return all the scope nodes', () => {
      const { scopes } = analyze(code6);
      const expectation = scopes.map(
        ({ text, nesting, type }) => `${type} | ${text} ${nesting}`
      );
      expect(expectation).toStrictEqual([
        'ArrowFunctionExpression | defer(…) callback 1',
        'ArrowFunctionExpression | progressiveJpg<src> 1',
        'ArrowFunctionExpression | smallProgressiveJpg<src> 1',
        'ArrowFunctionExpression | largeProgressiveJpg<src> 1',
        'ArrowFunctionExpression | LandingPage<{content, match, prescreenerType, goToStep, prescreenerLandingPageShown}> 1',
        'ArrowFunctionExpression | useEffect(…) callback 2',
        'ArrowFunctionExpression | <ViewContext.Consumer…1>…</ViewContext.Consumer> 2',
        'ArrowFunctionExpression | Object.keys(…).find(…) callback 3',
        'ArrowFunctionExpression | mapStateToProps<state, ownProps> 1',
        'ArrowFunctionExpression | mapDispatchToProps<dispatch> 1',
        'ArrowFunctionExpression | goToStep: ƒ 2',
        'ArrowFunctionExpression | prescreenerLandingPageShown: ƒ 2',
      ]);
    });
  });
});

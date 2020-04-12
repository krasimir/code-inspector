import fs from 'fs';
import { analyze } from '../index';

const code6 = fs
  .readFileSync(`${__dirname}/code-samples/code6.jsx`)
  .toString('utf8');

describe('Given the code6.tsx code sample', () => {
  describe('when analyzing the code', () => {
    it('should return all the scope nodes', () => {
      const { scopes } = analyze(code6);
      const expectation = scopes.map(({ text, type }) => `${type} | ${text}`);
      expect(expectation).toStrictEqual([
        'Program | Program',
        'ArrowFunctionExpression | defer(…) callback',
        'ArrowFunctionExpression | progressiveJpg(src)',
        'ArrowFunctionExpression | smallProgressiveJpg(src)',
        'ArrowFunctionExpression | largeProgressiveJpg(src)',
        'ArrowFunctionExpression | LandingPage({content, match, prescreenerType, goToStep, prescreenerLandingPageShown})',
        'ArrowFunctionExpression | useEffect(…) callback',
        'ArrowFunctionExpression | <ViewContext.Consumer…1>…</ViewContext.Consumer>',
        'ArrowFunctionExpression | Object.keys(…).find(…) callback',
        'ArrowFunctionExpression | mapStateToProps(state, ownProps)',
        'ArrowFunctionExpression | mapDispatchToProps(dispatch)',
        'ArrowFunctionExpression | goToStep: ƒ',
        'ArrowFunctionExpression | prescreenerLandingPageShown: ƒ',
      ]);
    });
  });
});

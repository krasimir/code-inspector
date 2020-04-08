import { call, put, select, take, takeLatest } from 'redux-saga/effects';

import {
  QUESTIONNAIRE_ANSWER,
  QUESTIONNAIRE_GO_TO_STEP,
  QUESTIONNAIRE_INITIALIZED,
  SKIP,
} from 'calpamos/src/questionnaire/constants';
import {
  syncUserState,
  flushStepsOnAnswerChange,
} from 'calpamos/src/questionnaire/sagas';
import {
  computeRelativeProgress,
  getNextAvailableStepIndex,
  hasErrors,
  getCurrentStep,
  isLastVisibleStep,
  isQuestionnaireReady,
  getSiteSelectionQuestion,
  getProfileAnswersUpToCurrentStep,
} from 'calpamos/src/questionnaire/selectors';
import {
  answerProcessed,
  updateQuestionnaireProgress,
  answerQuestion,
} from 'calpamos/src/questionnaire/actions';
import { notEligibleToRegister } from 'calpamos/src/questionnaire/utils';
import { isUserAPatient } from 'calpamos/src/registration/selectors';

import validateCurrentStep from './validateCurrentStep';

function* computeQuestionnaireProgress() {
  const progress = yield select(computeRelativeProgress);

  yield put(updateQuestionnaireProgress(progress));
}

export default function* watchQuestionnaireFlow(
  redirectTo,
  answerMatchQuestions,
  checkEligibility
) {
  yield takeLatest(QUESTIONNAIRE_GO_TO_STEP, function*({ current }) {
    const ready = yield select(isQuestionnaireReady);
    if (!ready) {
      yield take(QUESTIONNAIRE_INITIALIZED);
    }

    yield* computeQuestionnaireProgress();

    const beforeAnswering = yield select(getCurrentStep);

    while (true) {
      const newAnswer = yield take(QUESTIONNAIRE_ANSWER);
      if (yield select(isUserAPatient)) {
        if (!notEligibleToRegister(newAnswer, redirectTo)) {
          break;
        }
      }
      yield* flushStepsOnAnswerChange(beforeAnswering, newAnswer);
      const answers = yield select(getProfileAnswersUpToCurrentStep);
      yield* answerMatchQuestions(answers);

      if (yield select(hasErrors)) {
        yield put(answerProcessed());
        continue;
      }
      yield* syncUserState(newAnswer);

      const { total } = yield call(checkEligibility);

      if (total === 0) {
        const siteSelectionQuestion = yield select(getSiteSelectionQuestion);

        if (siteSelectionQuestion) {
          yield put(
            answerQuestion({
              id: siteSelectionQuestion.id,
              value: SKIP,
              inferred: true,
            })
          );
        }
      }
      yield put(answerProcessed());

      if (yield select(isLastVisibleStep)) {
        yield put(updateQuestionnaireProgress(1));
        yield call(redirectTo, `/register`);
        break;
      }

      const nextStepIndex = yield select(getNextAvailableStepIndex);

      yield call(redirectTo, `/questions/${nextStepIndex + 1}`);
      break;
    }
  });
  yield takeLatest(QUESTIONNAIRE_GO_TO_STEP, function*() {
    const ready = yield select(isQuestionnaireReady);
    if (!ready) {
      yield take(QUESTIONNAIRE_INITIALIZED);
    }
    yield validateCurrentStep(redirectTo);
  });
}

import { createSelector } from 'reselect';

export const selectQuizState = (state) => state.quiz;

export const selectAllAnswers = createSelector(
  [selectQuizState],
  (quizState) => quizState.answers
);

export const selectQuizStartTime = createSelector(
  [selectQuizState],
  (quizState) => quizState.quizStartTime
);

export const selectQuizSubmit = createSelector(
  [selectQuizState],
  (quizState) => quizState.quizSubmit
);

export const selectAnswerForQuestion = (questionId) =>
  createSelector(
    [selectAllAnswers],
    (answers) => answers[questionId]
  );





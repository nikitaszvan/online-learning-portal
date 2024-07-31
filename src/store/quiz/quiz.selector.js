import { createSelector } from 'reselect';

export const getQuizState = (state) => state.quiz;

export const getAllAnswers = createSelector(
  [getQuizState],
  (quizState) => quizState.answers
);

export const getQuizStartTime = createSelector(
  [getQuizState],
  (quizState) => quizState.quizStartTime
);

export const getAnswerForQuestion = (questionId) =>
  createSelector(
    [getAllAnswers],
    (answers) => answers[questionId]
  );





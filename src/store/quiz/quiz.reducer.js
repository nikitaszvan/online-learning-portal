import { QUIZ_ACTION_TYPES } from './quiz.types';

const QUIZ_INITIAL_STATE = {
  answers: {},
  quizStartTime: '',
};

export const quizReducer = (state = QUIZ_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case QUIZ_ACTION_TYPES.UPDATE_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [payload.questionId]: payload.answer,
        },
      };
    case QUIZ_ACTION_TYPES.START_QUIZ_COUNTDOWN:
      return {
        ...state,
        quizStartTime: payload,
      };
    default:
      return state;
  }
};

export default quizReducer;
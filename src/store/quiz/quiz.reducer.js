import { QUIZ_ACTION_TYPES } from './quiz.types';

const QUIZ_INITIAL_STATE = {
  answers: {},
  quizStartTime: '',
  quizSubmit: false,
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
    case QUIZ_ACTION_TYPES.RESET_QUIZ_COUNTDOWN:
      return {
        ...state,
        quizStartTime: payload,
      };
    case QUIZ_ACTION_TYPES.SUBMIT_QUIZ:
      return {
        ...state,
        quizSubmit: payload,
      };
    default:
      return state;
  }
};

export default quizReducer;
import { QUIZ_ACTION_TYPES } from './quiz.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const updateAnswer = (questionId, answer) => 
  createAction(QUIZ_ACTION_TYPES.UPDATE_ANSWER, { questionId, answer });

export const firstTimeQuizStart = (time) => 
  createAction(QUIZ_ACTION_TYPES.START_QUIZ_COUNTDOWN, time);

export const resetTimeQuizStart = (currentTime) => 
  createAction(QUIZ_ACTION_TYPES.RESET_QUIZ_COUNTDOWN, currentTime);
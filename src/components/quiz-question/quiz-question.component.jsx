import { useDispatch, useSelector } from 'react-redux';
import { updateAnswer } from '../../store/quiz/quiz.action';
import { getAnswerForQuestion } from '../../store/quiz/quiz.selector';
import {
  AnswerBox,
  QuestionContainer,
  QuestionGridContainer,
  QuestionHeaderContainer,
  QuestionRowContainer,
        } from './quiz-question.styles';

const QuizQuestion = ({ questionId, question, options }) => {
  const dispatch = useDispatch();
  const selectAnswerForQuestion = getAnswerForQuestion(questionId);
  const selectedAnswer = useSelector(selectAnswerForQuestion);

  const handleChange = (questionId, optionChoice) => {
    dispatch(updateAnswer(questionId, optionChoice));
  };

  // Helper function to get the border color based on selection
  const getBorderColor = (optionChoice) => {
    return selectedAnswer === optionChoice ? 'blue' : 'gray'; // Customize colors as needed
  };

  return (
    <QuestionContainer>
      <QuestionHeaderContainer>
        <h1>Q{questionId}</h1>
        <p>{question}</p>
      </QuestionHeaderContainer>
      <QuestionGridContainer>
        <QuestionRowContainer>
          {options.slice(0, 2).map((option, index) => (
              <AnswerBox
                key={index}
                bordercolour={getBorderColor(option.choice)}
                onClick={() => handleChange(questionId, option.choice)}
              >
                {index == 0 ? 'A.' : 'B.'} {option.value}
            </AnswerBox>
          ))}
        </QuestionRowContainer>
        <QuestionRowContainer>
          {options.slice(2, 4).map((option, index) => (
              <AnswerBox
                key={index + 2}
                bordercolour={getBorderColor(option.choice)}
                onClick={() => handleChange(questionId, option.choice)}
              >
                {index == 0 ? 'C.' : 'D.'} {option.value}
            </AnswerBox>
          ))}
        </QuestionRowContainer>
      </QuestionGridContainer>
    </QuestionContainer>
  );
};

export default QuizQuestion;
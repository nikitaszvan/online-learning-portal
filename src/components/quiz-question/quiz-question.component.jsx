import { useDispatch, useSelector } from 'react-redux';
import { updateAnswer } from '../../store/quiz/quiz.action';
import { getAnswerForQuestion } from '../../store/quiz/quiz.selector';
import { QuestionContainer } from './quiz-question.styles'; // Ensure styles are imported

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
      <div style={{ display: 'flex' }}>
        <h1>Q{questionId}</h1>
        <p>{question}</p>
      </div>
      <div style={{ display: 'flex', width: '50%', height: 'fit-content' }}>
        {options.slice(0, 2).map((option, index) => (
          <div key={option.value} style={{ margin: '5px', width: '100%'}}>
            <div
              onClick={() => handleChange(questionId, option.choice)}
              className='question-answer'
              style={{
                border: `2px solid ${getBorderColor(option.choice)}`,
                padding: '10px',
                cursor: 'pointer',
                width: '100%',
                height: '100%',
              }}
            >
              {index == 0 ? 'A.' : 'B.'}{option.value}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', width: '50%', height: 'fit-content' }}>
        {options.slice(2, 4).map((option, index) => (
          <div key={option.value} style={{ margin: '5px', width: '100%' }}>
            <div
              onClick={() => handleChange(questionId, option.choice)}
              className='question-answer'
              style={{
                border: `2px solid ${getBorderColor(option.choice)}`,
                padding: '10px',
                cursor: 'pointer',
                width: '100%',
                height: '100%',
              }}
            >
              {index == 0 ? 'C.' : 'D.'}{option.value}
            </div>
          </div>
        ))}
      </div>
    </QuestionContainer>
  );
};

export default QuizQuestion;
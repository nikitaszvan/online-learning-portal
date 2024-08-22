import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { 
  ButtonContainer,
  QuizContainer,
  QuizResultContainer,
  SubmitQuizButton,
 } from './quiz-page.styles';
import CountdownTimer from '../countdown-timer/countdown-timer.component';
import { 
    updateQuizSubmission,
    } from '../../store/quiz/quiz.action';
import QuizQuestion from '../quiz-question/quiz-question.component';
import ReactStyledProgressBar from '../course-progress-bar/course-progress-bar.component';

import { selectQuizStartTime,
        selectAllAnswers
 } from '../../store/quiz/quiz.selector'; 

 import { getQuizDataFromLocalStorage } from '../../routes/quiz-summary/quiz-summary.component'

const QuizPage = () => {
  const dispatch = useDispatch();
  const startTimeFromState = useSelector(selectQuizStartTime);
  const startTime = new Date(startTimeFromState);
  const [ quizSubmitted, submitQuiz ] = useState(false);
  const isInvalidDate = (date) => {
      return Object.prototype.toString.call(date) === '[object Date]' && isNaN(date.getTime());
    };

  
  const handleSubmitQuiz = () => {
    submitQuiz(true);
    dispatch(updateQuizSubmission());

  }

  const getLastKey = (obj) => {
    if (obj && Object.keys(obj).length) {
        const keys = Object.keys(obj);
        const numericKeys = keys.map(key => Number(key)).filter(key => !isNaN(key));
        return Math.max(...numericKeys);
    }
    return null;
  }


  const getQuizData = getQuizDataFromLocalStorage();
  const lastAnswered = getLastKey(getQuizData.answers);

  const questions = [
    {   questionId: '1',
        question: `Which of the following is not a primary data type in most programming languages?`,
        options : [
            { value: `Integer`, choice: 'a' },
            { value: `String`, choice: 'b' } ,
            { value: `Array`, choice: 'c' },
            { value: `Boolean`, choice: 'd' },
          ],
        correctAnswer: 'c',

    },
    { questionId: '2',
        question: `In the context of algorithms, what does the term "time complexity" refer to?`,
        options : [
            { value: `The amount of memory an algorithm uses`, choice: 'a' },
            { value: `The number of lines of code in an algorithm`, choice: 'b' } ,
            { value: `The amount of time an algorithm takes to complete as a function of the input size`, choice: 'c' },
            { value: `The number of steps in an algorithm`, choice: 'd' },
          ],
          correctAnswer: 'c',
    },
    { questionId: '3',
        question: `Which sorting algorithm has the best average-case time complexity?`,
        options : [
            { value: `Bubble Sort`, choice: 'a' },
            { value: `Merge Sort`, choice: 'b' } ,
            { value: `Selection Sort`, choice: 'c' },
            { value: `Insertion Sort`, choice: 'd' },
          ],
          correctAnswer: 'b',
    },
    { questionId: '4',
        question: `What does the term 'syntax' refer to in programming languages?`,
        options : [
            { value: `The logic and algorithms used in programming`, choice: 'a' },
            { value: `The rules that define the structure of valid statements in a language`, choice: 'b' } ,
            { value: `The speed at which a program runs`, choice: 'c' },
            { value: `The way data is stored in memory`, choice: 'd' },
          ],
          correctAnswer: 'b',
    },
    { questionId: '5',
        question: `In object-oriented programming, what is encapsulation?`,
        options : [
            { value: `The process of hiding the internal state and requiring all interaction to be performed through an object's methods`, choice: 'a' },
            { value: `The ability of different classes to share the same method names`, choice: 'b' } ,
            { value: `The concept of creating new classes based on existing classes`, choice: 'c' },
            { value: `The process of combining multiple methods into a single method`, choice: 'd' },
          ],
          correctAnswer: 'a',
    },
    { questionId: '6',
        question: `True or False: In most programming languages, an array is a zero-indexed data structure.`,
        options : [
            { value: `True`, choice: 'a' },
            { value: `False`, choice: 'b' } ,
          ],
          correctAnswer: 'a',
    },
    { questionId: '7',
        question: `True or False: The for loop in programming is typically used for iterating a fixed number of times.`,
        options : [
            { value: `True`, choice: 'a' },
            { value: `False`, choice: 'b' } ,
          ],
          correctAnswer: 'a',
    },
    { questionId: '8',
        question: `True or False: In a stack data structure, the last item added is the first one to be removed.`,
        options : [
            { value: `True`, choice: 'a' },
            { value: `False`, choice: 'b' } ,
          ],
          correctAnswer: 'a',
    },
    { questionId: '9',
        question: `True or False: A binary search algorithm requires the input data to be sorted.`,
        options : [
            { value: `True`, choice: 'a' },
            { value: `False`, choice: 'b' } ,
          ],
          correctAnswer: 'a',
    },
    { questionId: '10',
        question: `True or False: The term 'inheritance' in object-oriented programming refers to the ability of a class to use methods and properties from another class.`,
        options : [
            { value: `True`, choice: 'a' },
            { value: `False`, choice: 'b' } ,
          ],
          correctAnswer: 'a',
    },
    ];

    const checkAnswers = (userAnswers) => {
        const result = questions.reduce((accumulator, question) => {
          const userAnswer = userAnswers[question.questionId];
          const isCorrect = userAnswer === question.correctAnswer;
      
          // Update the accumulator object with correct count
          return {
            correctCount: isCorrect ? accumulator.correctCount + 1 : accumulator.correctCount,
            totalQuestions: questions.length
          };
        }, { correctCount: 0, totalQuestions: 0 }); // Initial value with correctCount and totalQuestions
      
        return result;
      };

    const userAnswers = useSelector(selectAllAnswers); // Get answers from Redux store
    const results = checkAnswers(userAnswers);
    const [currentIndex, setCurrentIndex] = useState(lastAnswered ? lastAnswered -1 : 0);

    const handleNext = () => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }

    const handlePrevious = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

  return (
     !quizSubmitted ? 
        <QuizContainer>
          <ReactStyledProgressBar now={Math.trunc((Object.keys(userAnswers).length / questions.length) * 100)}/>
          <QuizQuestion
            questionId={questions[currentIndex].questionId}
            question={questions[currentIndex].question}
            options={questions[currentIndex].options}
          />
          <ButtonContainer>
            <button onClick={handlePrevious} disabled={currentIndex === 0}>
              Previous
            </button>
            <button onClick={handleNext} disabled={currentIndex === questions.length - 1}>
              Next
            </button>
          </ButtonContainer>
          <SubmitQuizButton onClick={() => {handleSubmitQuiz()}} disabled={Object.keys(userAnswers).length !== questions.length}>Submit Quiz</SubmitQuizButton>
          {!isInvalidDate(startTime) &&
          <CountdownTimer
              startTime={ startTime }
              minutes = {5}
              seconds = {1}
              onComplete = {() => {handleSubmitQuiz()}}
          />}
         </QuizContainer>
         :
          <QuizResultContainer>
            <h1>Your score is {((results.correctCount / results.totalQuestions) * 100)}%</h1>
            <h3>Submission Id: {uuidv4().replace(/-/g, '').slice(0, 20)}</h3>
            <button onClick={() => window.close()}>Return to Student Portal</button>
          </QuizResultContainer>
     
  )
}

export default QuizPage;
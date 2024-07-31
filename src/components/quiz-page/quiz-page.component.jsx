import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { QuizContainer } from './quiz-page.styles';
import CountdownTimer from '../countdown-timer/countdown-timer.component';
import { 
    firstTimeQuizStart,
    resetTimeQuizStart,
    } from '../../store/quiz/quiz.action';
import QuizQuestion from '../quiz-question/quiz-question.component';

import { getQuizStartTime,
        getAllAnswers
 } from '../../store/quiz/quiz.selector'; 

const QuizPage = () => {
    const startTimeFromState = useSelector(getQuizStartTime);
    const [ startTime, setStartTime ] = useState(new Date(startTimeFromState));
    const [ quizSubmitted, submitQuiz ] = useState(false);
    const isInvalidDate = (date) => {
        return Object.prototype.toString.call(date) === '[object Date]' && isNaN(date.getTime());
      };
  
    useEffect(() => {

      if (document.querySelector('.expanded')) {
        document.querySelector('#collapse-side-nav-button').click();
    }
    }, []);



  const Completionist = () => <span>Time has been completed</span>;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return <span>{hours || '00'}:{minutes || '00'}:{String(seconds).length == 1 ? `0${seconds}` : seconds || '00'}</span>;
    }
  };

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
        // Initial value for the accumulator is an object
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

    const userAnswers = useSelector(getAllAnswers); // Get answers from Redux store
    const results = checkAnswers(userAnswers);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
      console.log('next fired');
    }

    const handlePrevious = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }

      console.log('prev fired');
    };

  return (
     !quizSubmitted ? (
        <QuizContainer>
            {!isInvalidDate(startTime) &&
             <CountdownTimer
                 startTime={ startTime }
                 minutes = {30}
                 seconds = {1}
                // onComplete = {() => {submitQuiz(true)}}
             />}
              <QuizQuestion
                questionId={questions[currentIndex].questionId}
                question={questions[currentIndex].question}
                options={questions[currentIndex].options}
              />
              <button onClick={handlePrevious} disabled={currentIndex === 0}>
                Previous
              </button>
              <button onClick={handleNext} disabled={currentIndex === questions.length - 1}>
                Next
              </button>
                <button className="submit-button" onClick={() => {submitQuiz(true)}}>Submit Quiz</button>
        </QuizContainer>
            ) :
            (
                <div style={{flex: '1', overflow: 'auto'}}>
                    <div>{ results.correctCount }/{results.totalQuestions}</div>
                </div>
            )
        
  )
}

export default QuizPage;
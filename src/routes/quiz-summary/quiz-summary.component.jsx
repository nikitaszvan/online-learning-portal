import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    SummaryContainer,
    TextContainer
} from './quiz-summary.styles';
import 
    { getQuizStartTime }
    from '../../store/quiz/quiz.selector'; 

import { 
    firstTimeQuizStart,
    } from '../../store/quiz/quiz.action';

const QuizSummary = () => {
    const dispatch = useDispatch();
    const [newWindow, setNewWindow] = useState(null);
  const [isWindowClosed, setIsWindowClosed] = useState(false);
  const checkWindowClosedInterval = useRef(null);
    const [ buttonActivity, setButtonActivity ] = useState(true);
    const quizStartTimeFromState = useSelector(getQuizStartTime);

    const [windowOpenTimestamp, setWindowOpenTimestamp] = useState(quizStartTimeFromState && new Date(quizStartTimeFromState).toLocaleString());
    const [ buttonLabel, setButtonLabel ] = useState(windowOpenTimestamp ? 'Continue Quiz' : 'Start Quiz');


    useEffect(() => {
        if (document.querySelector('.expanded')) {
            document.querySelector('#collapse-side-nav-button').click();
        }
    }, [])
    console.log(window.innerWidth, window.innerHeight);

  const handleOpenNewWindow = (path) => {
    if (!windowOpenTimestamp) {
        const newStartTime = new Date();
        dispatch(firstTimeQuizStart(newStartTime));
        setWindowOpenTimestamp(newStartTime);
    }
    const newWindowUrl = `${window.location.origin}/${path}`;
    const leftPosition = (window.screen.width / 2) - ((800 / 2));
    //Allow for title and status bars.
    const topPosition = (window.screen.height / 2) - ((600 / 2));
    //Open the window.
    const openedWindow = window.open(newWindowUrl, '_blank',
    "status=no,height=" + 600 + ",width=" + 800 + ",resizable=yes,left="
    + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY="
    + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");

    // const openedWindow = window.open(newWindowUrl, '_blank', windowFeatures);

    if (!windowOpenTimestamp){
        setWindowOpenTimestamp(new Date().toLocaleString());
    }

    setButtonActivity(false);

    setNewWindow(openedWindow);
    setIsWindowClosed(false);
    checkWindowClosedInterval.current = setInterval(() => {
        if (openedWindow.closed) {
          setIsWindowClosed(true);
          clearInterval(checkWindowClosedInterval.current);
          setButtonActivity(true);
          setButtonLabel('Continue Quiz');
        }
        else {
          setButtonLabel('In Progress');
        }
      }, 1000);
    };

    useEffect(() => {
        return () => {
          if (checkWindowClosedInterval.current) {
            clearInterval(checkWindowClosedInterval.current);
          }
        };
      }, []);
    


    return (
        <SummaryContainer>
            <TextContainer isdisabled={!buttonActivity}>
                <h1>Summary - Quiz 1 Computer Science I</h1>
                <h2>Description</h2>
                <p>Follow the instructions:<br/>
                    <ul>
                        <li>Read Questions Carefully: Ensure you understand each question before answering.</li>
                    </ul>
                </p>
                <p>Maintain Academic Integrity:<br/>
                    <ul>
                        <li>Avoid Unauthorized Resources: Use only the resources allowed by the instructor.</li>
                        <li>Do Not Collaborate: Complete the quiz independently unless collaboration is explicitly permitted.</li>
                    </ul>
                </p>
                <p>Technical Issues:<br/>
                    <ul>
                        <li>Report Issues: If you encounter technical problems, notify the instructor or support team immediately.</li>
                    </ul>
                </p>
                <h2>Quiz Details</h2>
                <p><strong>Time Limit</strong><br/>
                    30 minutes {windowOpenTimestamp && `(Started: ${windowOpenTimestamp})`}
                </p>
                <p><strong>Attempts</strong><br/>
                Allowed - 2, Completed - 0
                </p>
                <h2>Instructions</h2>
                <p>When the timer reaches zero, your answers will be automatically saved and submitted.</p>
                <p>All academic assessments are subject to Policy 60: Academic Integrity. <br/>
                In completing this assessment, I affirm that I wil adhere to Policy 60 as well as the assessment instructions and guidelines. 
                I acknowledge that failure to adhere to Policy 60 or to the instructions and guidelines may constitute academic misconduct.</p>
                <button onClick={() => handleOpenNewWindow('quiz')} disabled={!buttonActivity} >{ buttonLabel }</button>
            </TextContainer>
        </SummaryContainer>    
    )
}

export default QuizSummary;
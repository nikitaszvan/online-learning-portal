import { useState, useEffect } from "react";
import { CountdownTimerContainer } from './countdown-timer.styles';

const CountdownTimer = ({ startTime, minutes, seconds, onComplete }) => {
    const calculateTimeRemaining = (startTime, minutes, seconds) => {
        const endTime = new Date(startTime.getTime() + minutes * 60000 + seconds * 1000);
        const now = new Date();
        return endTime - now;
      };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(startTime, minutes, seconds));
    
    useEffect(() => {
      const intervalId = setInterval(() => {
        const newTimeRemaining = calculateTimeRemaining(startTime, minutes, seconds);
        if (newTimeRemaining <= 0) {
          clearInterval(intervalId);
          setTimeRemaining(0);
          if (onComplete) onComplete();
        } else {
          setTimeRemaining(newTimeRemaining);
        }
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, [startTime, minutes, seconds]);
  
    const formatTime = (milliseconds) => {
      const totalSeconds = Math.max(Math.floor(milliseconds / 1000), 0);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      
      return {
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      };
    };

    const { hours, minutes: displayMinutes, seconds: displaySeconds } = formatTime(timeRemaining);
  
    return (
      <CountdownTimerContainer>
        {timeRemaining > 0 ? (
          <span style={{color: displayMinutes <= 5 ? 'red' : 'black'}}>{hours}:{displayMinutes}:{displaySeconds}</span>
        ) : (
          <span>Time's up!</span>
        )}
      </CountdownTimerContainer>
    );
  };

  export default CountdownTimer;
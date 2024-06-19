import {
    CourseCodeAndTimeContainer,
    TaskDescAndDateContainer,
    TaskItemContainer
} from './task-item.styles';
import * as Color from '@mui/material/colors';

const TaskItem = ({ task }) => {
    const { courseCode, courseColour, dueDate, dueTime, taskDue, taskType } = task;
  return (
    <TaskItemContainer>
      <CourseCodeAndTimeContainer>
          <p style={{color: `${Color[courseColour][400]}`}}>{ courseCode }</p>
          <p>{ dueTime }</p>
      </CourseCodeAndTimeContainer>
      <TaskDescAndDateContainer style={{borderLeft: `3px solid ${Color[courseColour][400]}`}}>
          <p>{ taskDue } { taskType }</p>
          <p>{ dueDate }</p>
      </TaskDescAndDateContainer>
    </TaskItemContainer>
  )
}

export default TaskItem
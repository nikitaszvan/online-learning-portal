import {
    CourseCodeAndTimeContainer,
    TaskDescAndDateContainer,
    TaskItemContainer
} from './task-item.styles';
import * as Color from '@mui/material/colors';
import Skeleton from '../skeleton-loader/skeleton-loader.component';

const TaskItem = ({ 
  task,
  task : {
    courseCode = '',
    courseColour = '',
    dueDate = '',
    dueTime = '',
    taskDue = '',
    taskType = '' 
  } = {}
  
 }) => {

  const renderPlaceholders = () => {
    return (
      <TaskItemContainer>
        <CourseCodeAndTimeContainer>
          <Skeleton />
          <Skeleton />
        </CourseCodeAndTimeContainer>
        <TaskDescAndDateContainer>
          <Skeleton />
          <Skeleton />
        </TaskDescAndDateContainer>
      </TaskItemContainer>
    )
  }
  return(
   task ? 
    (
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
    ) : renderPlaceholders()
  )

}

export default TaskItem;
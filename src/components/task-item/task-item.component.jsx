import {
    CourseCodeAndTimeContainer,
    TaskDescAndDateContainer,
    TaskItemContainer
} from './task-item.styles';

const TaskItem = ({ task }) => {
    const { courseCode, dueDate, dueTime, taskDue, taskType } = task;
  return (
    <TaskItemContainer>
      <CourseCodeAndTimeContainer>
          <p>{ courseCode }</p>
          <p>{ dueTime }</p>
      </CourseCodeAndTimeContainer>
      <TaskDescAndDateContainer>
          <p>{ taskDue } { taskType }</p>
          <p>{ dueDate }</p>
      </TaskDescAndDateContainer>
    </TaskItemContainer>
  )
}

export default TaskItem
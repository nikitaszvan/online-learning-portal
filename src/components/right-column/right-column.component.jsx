import { useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import DynamicIcon from '../dynamic-icon.component';
import LectureEventCard from '../lecture-event/lecture-event.component';
import {
  AddTaskButton,
  CarouselStyled,
  RightColumnContainer,
  LectureEventHeader,
  SortByButton,
  TaskList,
  TaskListHeader,
  UpcomingLectures,
} from './right-column.styles';
import TaskItem from '../task-item/task-item.component';
import { selectTasksMap } from '../../store/tasks/tasks.selector';
import { selectCoursesMap } from '../../store/courses/courses.selector';
import * as Color from '@mui/material/colors';

const RightColumn = () => {

  const [taskListExpanded, expandTaskList] = useState(false);
  const tasksMap = useSelector(selectTasksMap);
  const coursesMap = useSelector(selectCoursesMap);

  const handleExpandClick = () => {
    expandTaskList(!taskListExpanded);
    console.log(taskListExpanded);
  }
  

    return (
        <RightColumnContainer>
          <LectureEventHeader>
            <h2>Lectures</h2>
            <p>UP NEXT</p>
          </LectureEventHeader>
          <CarouselStyled interval={null} data-bs-theme="dark">
          {Object.entries(coursesMap)?.map(([key, course]) => {
                  return (
                    <Carousel.Item key={key}>
                      <LectureEventCard key={key} course={course} backgroundColour={Color[course.courseColour][50]} accentColour={Color[course.courseColour][500]}/>
                    </Carousel.Item>
                  )
                })
              }
          </CarouselStyled>
          <TaskList>
            <TaskListHeader>
              <h2>Tasks</h2>
              <SortByButton>
                <DynamicIcon iconName='Checklist'/>
                <p>Sort by</p>
              </SortByButton>
              <AddTaskButton>
                <DynamicIcon iconName='ControlPoint'/>
              </AddTaskButton>
            </TaskListHeader>
            {Object.entries(tasksMap)?.map(([key, task]) => {
                  return (
                    <TaskItem key={key} task={task}/>
                  )
                })
              }
          </TaskList>
          <DynamicIcon iconName='KeyboardArrowDown' onClick={handleExpandClick}/>
        </RightColumnContainer>
    )
}

export default RightColumn;
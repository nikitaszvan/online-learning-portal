import { useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import DynamicIcon from '../dynamic-icon.component';
import {
  AddTaskButton,
  CarouselStyled,
  LectureEventCard,
  RightColumnContainer,
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
const tasksMap = useSelector(selectTasksMap);
const coursesMap = useSelector(selectCoursesMap);

    return (
        <RightColumnContainer>
          <CarouselStyled interval={null} data-bs-theme="dark">
          {Object.entries(coursesMap)?.map(([key, course]) => {
                  return (
                    <Carousel.Item>
                      <LectureEventCard key={key} course={course} style={{backgroundColor: `${Color[course.courseColour][50]}`}}/>
                    </Carousel.Item>
                  )
                })
              }
{/*           
          <Carousel.Item>
          </Carousel.Item>  
          <Carousel.Item>
          </Carousel.Item>     */}
          </CarouselStyled>
          <TaskList>
            <TaskListHeader>
              <h3>UPCOMING</h3>
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
              <DynamicIcon iconName='KeyboardArrowDown' />
          </TaskList>
        </RightColumnContainer>
    )
}

export default RightColumn;
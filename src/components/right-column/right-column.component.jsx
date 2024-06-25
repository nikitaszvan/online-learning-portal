import { useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import DynamicIcon from '../dynamic-icon.component';
import LectureEventCard from '../lecture-event/lecture-event.component';
import {
  CarouselStyled,
  CarouselStyledContainer,
  RightColumnContainer,
  LectureEventHeader
} from './right-column.styles';
import TaskList from '../task-list/task-list.component';
import { selectCoursesMap } from '../../store/courses/courses.selector';
import * as Color from '@mui/material/colors';

const RightColumn = () => {
  const coursesMap = useSelector(selectCoursesMap);
  const [ rightColumnCollapsed, collapseRightColumn ] = useState(false);
  const handleCollapseClick = () => {
    collapseRightColumn(!rightColumnCollapsed);
  }

    return (
        <RightColumnContainer collapsecolumn={ rightColumnCollapsed } >
          <DynamicIcon iconName='ChevronRight' onclick={ handleCollapseClick }/>
          <LectureEventHeader>
            <h2>Lectures</h2>
            <p>UP NEXT</p>
          </LectureEventHeader>
          <CarouselStyledContainer>
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
          </CarouselStyledContainer>
          <TaskList collapsecolumn={ rightColumnCollapsed } />
        </RightColumnContainer>
    )
}


export default RightColumn;
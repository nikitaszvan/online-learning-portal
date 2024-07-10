import { useState, useEffect } from 'react';
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
import Skeleton from '../skeleton-loader/skeleton-loader.component'; 

const RightColumn = () => {
  const coursesMap = useSelector(selectCoursesMap);
  const [ rightColumnCollapsed, collapseRightColumn ] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(coursesMap).length > 0) {
      setLoading(false);
    }
  }, [coursesMap]);

  const renderPlaceholders = () => {
    return (
      <div className="lecture-card-skeleton">
        <div>
          <Skeleton />
          <Skeleton />
        </div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  };

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
            {loading ? renderPlaceholders() :
            Object.entries(coursesMap)?.map(([key, course]) => {
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
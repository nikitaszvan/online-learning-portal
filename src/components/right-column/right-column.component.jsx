import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import DynamicIcon from '../dynamic-icon.component';
import LectureEventCard from '../lecture-event/lecture-event.component';
import {
  CarouselStyled,
  CarouselStyledContainer,
  DateTaskList,
  LectureEventHeader,
  ContainerTab,
  RightColumnContainer,
} from './right-column.styles';
import TaskList from '../task-list/task-list.component';
import { selectCoursesMap } from '../../store/courses/courses.selector';
import * as Color from '@mui/material/colors';
import Skeleton from '../skeleton-loader/skeleton-loader.component'; 
import { ReactCalendar } from './right-column.styles';
import 'react-calendar/dist/Calendar.css';

const RightColumn = () => {
  const coursesMap = useSelector(selectCoursesMap);
  const [ rightColumnCollapsed, collapseRightColumn ] = useState(false);
  const [loading, setLoading] = useState(true);
 const [date, setDate] = useState(new Date());

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
        // <RightColumnContainer collapsecolumn={ rightColumnCollapsed } >
        <>
          <ContainerTab collapsecolumn={ rightColumnCollapsed } >
            <button onClick={ handleCollapseClick } id='right-column-tab'>
              <DynamicIcon iconName='ChevronRight' />
            </button>
          </ContainerTab>
          <RightColumnContainer collapsecolumn={ rightColumnCollapsed } className='text-2'>
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
          <ReactCalendar 
            onChange={setDate} value={date}
          />
          <DateTaskList>
            <p>{date.toLocaleDateString('en-US', { weekday: 'short' })} {date.toLocaleDateString('en-US', { month: 'short' })} {date.getDate()} {date.getFullYear()}</p>
            <p>CPS 213 - 12:00PM - Quiz 3</p> 
            <p>CPS 569 - 2:00PM - Assignment 1</p> 
            <p>CPS 369 - 6:00PM - Quiz 2</p> 
          </DateTaskList>
          </RightColumnContainer>

        </>
    )
}


export default RightColumn;
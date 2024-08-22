import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import DynamicIcon from '../dynamic-icon.component';
import LectureEventCard from '../lecture-event/lecture-event.component';
import {
  CarouselStyled,
  CarouselStyledContainer,
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
  const divRef = useRef(null);
  const coursesMap = useSelector(selectCoursesMap);
  const [loading, setLoading] = useState(true);
 const [date, setDate] = useState(new Date());
 const [ rightColumnCollapsed, collapseRightColumn ] = useState(() => window.innerWidth < 811);

  useEffect(() => {
    if (Object.keys(coursesMap).length > 0) {
      setLoading(false);
    }
  }, [coursesMap]);

  const handleCollapseClick = () => {
    collapseRightColumn(prev => !prev);
  }

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

 

    return (
        // <RightColumnContainer collapsecolumn={ rightColumnCollapsed } >
        <>
          <ContainerTab collapsecolumn={ rightColumnCollapsed } onClick={ () => handleCollapseClick() } id='right-column-tab'>
              <DynamicIcon iconName='ChevronRight' />
          </ContainerTab>
          <RightColumnContainer collapsecolumn={ rightColumnCollapsed } className='text-2' ref={divRef}>
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
          <ReactCalendar 
            onChange={setDate} value={date}
          />
          <TaskList collapsecolumn={ rightColumnCollapsed } />
          </RightColumnContainer>

        </>
    )
  }


export default RightColumn;
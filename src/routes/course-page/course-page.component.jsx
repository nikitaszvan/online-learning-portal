import React from 'react';
import { CourseHeader } from '../../components/course-header/course-header.component';
import { 
  CoursePageContainer,
  CourseAnnouncementContainer,
  MainCourseContentContainer,
  UpcomingEventsContainer,
 } from './course-page.styles';

 import { Dropdown } from 'react-bootstrap';

export const CoursePage = ({course}) => {
  return (
    <CoursePageContainer>
        <CourseHeader course={course}/>
        <MainCourseContentContainer>
          <CourseAnnouncementContainer>
          <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          Announcements
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/">Action</Dropdown.Item>
          <Dropdown.Item href="/">Another action</Dropdown.Item>
          <Dropdown.Item href="/">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
          </CourseAnnouncementContainer>
          <UpcomingEventsContainer />
        </MainCourseContentContainer>
    </CoursePageContainer>
  )
}


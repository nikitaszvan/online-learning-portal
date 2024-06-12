import { useState, useEffect } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';


import { 
  DirectoryContainer,
  DirectoryHeaderContainer,
  CourseCardsContainer,
 } from './directory.styles';

import {
  selectCoursesMap,
  selectCoursesIsLoading,
} from '../../store/courses/courses.selector';
import { Link } from 'react-router-dom';
const Directory = () => {
  // const { course } = useParams();
  const coursesMap = useSelector(selectCoursesMap);

  return (
    <DirectoryContainer>
      <DirectoryHeaderContainer>
        <h1>My Courses</h1>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <FontAwesomeIcon icon={faFilter} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
              <div className="mb-3">
              <Form.Check
                type='checkbox'
                label='Action'
              />
              </div>
              <div className="mb-3">
              <Form.Check
                type='checkbox'
                label='Action'
              />
              </div><div className="mb-3">
              <Form.Check
                type='checkbox'
                label='Action'
              />
              </div>
          </Dropdown.Menu>
      </Dropdown>
      </DirectoryHeaderContainer>
      <CourseCardsContainer>
        {Object.entries(coursesMap).map(([key, course]) => (
          <Link to={`/course/${course.courseSlug}`}>
            <DirectoryItem key={key} course={course} courseId={key}/>
          </Link>
        ))}
      </CourseCardsContainer>
    </DirectoryContainer>
  );
};

export default Directory;

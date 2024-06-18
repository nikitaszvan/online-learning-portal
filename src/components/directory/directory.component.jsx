// import { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilter } from '@fortawesome/free-solid-svg-icons';
// import { Form } from 'react-bootstrap';
// import { Dropdown } from 'react-bootstrap';
import DirectoryItem from '../directory-item/directory-item.component';
import { useSelector } from 'react-redux';

import DynamicIcon from '../dynamic-icon.component';
// import { useParams } from 'react-router-dom';

import { 
  DirectoryContainer,
  DirectoryHeaderContainer,
  CourseCardsContainer,
 } from './directory.styles';

import {
  selectCoursesMap,
} from '../../store/courses/courses.selector';

import { Link } from 'react-router-dom';
const Directory = () => {
  // const { course } = useParams();
  const coursesMap = useSelector(selectCoursesMap);

  return (
    <DirectoryContainer>
      <DirectoryHeaderContainer>
        <DynamicIcon iconName='MenuOutlined' />
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

import { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilter } from '@fortawesome/free-solid-svg-icons';
// import { Form } from 'react-bootstrap';
// import { Dropdown } from 'react-bootstrap';
import DirectoryItem from '../directory-item/directory-item.component';
import { useSelector } from 'react-redux';
import * as Color from '@mui/material/colors';

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
  const [loading, setLoading] = useState(true);
  const [coursesCardForm, setCoursesCardForm] = useState(true);
  const coursesMap = useSelector(selectCoursesMap);

  useEffect(() => {
    if (Object.keys(coursesMap).length > 0) {
      setLoading(false);
    }

  }, [coursesMap]);

  const renderPlaceholders = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <DirectoryItem key={index} />
    ));
  };

  const renderCourses = () => {
    return Object.entries(coursesMap).map(([key, course]) => (
      <Link to={`/course/${course.courseSlug}`} key={key} >
        <DirectoryItem 
          cardForm = {coursesCardForm}
          key = {key}
          course={course} 
          courseId={key} 
          primaryColour={Color[course.courseColour][50]} 
          accentColour={Color[course.courseColour][400]}
        />
      </Link>
    ));
  };

  return (
    <DirectoryContainer>
      <DirectoryHeaderContainer>
        {coursesCardForm ? <DynamicIcon iconName='MenuOutlined' onclick={ () => setCoursesCardForm(!coursesCardForm) }/> :
        <DynamicIcon iconName='Apps' onclick={ () => setCoursesCardForm(!coursesCardForm) }/>}
      </DirectoryHeaderContainer>
      <CourseCardsContainer className={coursesCardForm ? 'grid-layout' : 'block-layout'}>
        {!coursesCardForm && 
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
            <p>Instructor Name and Faculty</p>
            <p>Course Code</p>
            <p>Course Name</p>
            <p>Term</p>
          </div>}
        {loading ? renderPlaceholders() : renderCourses()}
      </CourseCardsContainer>
    </DirectoryContainer>
  );
};

export default Directory;

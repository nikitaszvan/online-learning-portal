import { useState, useEffect } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';


import { DirectoryContainer, CourseCardsContainer } from './directory.styles';
import { fetchCoursesStart } from '../../store/courses/courses.action';
import {
  selectCoursesMap,
  selectCoursesIsLoading,
} from '../../store/courses/courses.selector';
const Directory = () => {
  // const { course } = useParams();

  const coursesMap = useSelector(selectCoursesMap);


  return (
    <DirectoryContainer>
      <h1>My Courses</h1>
      <CourseCardsContainer>
        {Object.entries(coursesMap).map(([key, course]) => (
          <DirectoryItem key={key} course={course} />
        ))}
      </CourseCardsContainer>
    </DirectoryContainer>
  );
};

export default Directory;

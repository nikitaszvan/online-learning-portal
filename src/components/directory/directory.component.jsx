import { useState, useEffect } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { DirectoryContainer } from './directory.styles';
import { fetchCoursesStart } from '../../store/courses/courses.action';
import {
  selectCoursesMap,
  selectCoursesIsLoading,
} from '../../store/courses/courses.selector';
const Directory = () => {
  // const { course } = useParams();
  const dispatch = useDispatch();
  const coursesMap = useSelector(selectCoursesMap);

  useEffect(() => {
    dispatch(fetchCoursesStart());
  }, []);

  return (
    <DirectoryContainer>
      {Object.keys(coursesMap).map((course) => (
        <DirectoryItem key={course.id} title={course} />
      ))}
          </DirectoryContainer>
  );
};

export default Directory;

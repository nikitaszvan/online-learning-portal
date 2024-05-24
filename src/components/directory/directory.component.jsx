import { useState, useEffect } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';
import coursetest from '../../data/courses.json';

const Directory = () => {
  const courses = coursetest;

  return (
    <DirectoryContainer>
      {courses.map((course) => (
        <DirectoryItem key={course.id} course={course} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;

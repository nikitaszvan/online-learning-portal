import React from 'react';
import { Link } from 'react-router-dom';
import { CourseHeaderContainer } from './course-header.styles';

export const CourseHeader = ({courseId}) => {
  return (
    <CourseHeaderContainer>
        <Link to='#'>Content</Link>
        <Link to='#'>Quizzes</Link>
        <Link to='#'>Awards</Link>
    </CourseHeaderContainer>
  )
}

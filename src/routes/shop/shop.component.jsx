import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CoursesPreview from '../courses-preview/courses-preview.component';
import Course from '../course/course.component';
import { fetchCoursesStart } from '../../store/courses/courses.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoursesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CoursesPreview />} />
      <Route path=':course' element={<Course />} />
    </Routes>
  );
};

export default Shop;

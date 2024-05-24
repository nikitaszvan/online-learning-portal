import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import {
  selectCoursesMap,
  selectCoursesIsLoading,
} from '../../store/courses/courses.selector';

import CoursePreview from '../../components/course-preview/course-preview.component';
import Spinner from '../../components/spinner/spinner.component';

const CoursesPreview = () => {
  const coursesMap = useSelector(selectCoursesMap);
  const isLoading = useSelector(selectCoursesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(coursesMap).map((title) => {
          const products = coursesMap[title];
          return (
            <CoursePreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CoursesPreview;

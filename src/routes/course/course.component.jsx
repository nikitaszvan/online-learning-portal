import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import {
  selectCoursesMap,
  selectCoursesIsLoading,
} from '../../store/courses/courses.selector';

import { CourseContainer, Title } from './course.styles';

const Course = () => {
  const { course } = useParams();
  const coursesMap = useSelector(selectCoursesMap);
  const isLoading = useSelector(selectCoursesIsLoading);
  const [products, setProducts] = useState(coursesMap[course]);

  useEffect(() => {
    setProducts(coursesMap[course]);
  }, [course, coursesMap]);

  return (
    <Fragment>
      <Title>{course.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CourseContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CourseContainer>
      )}
    </Fragment>
  );
};

export default Course;

import ProductCard from '../product-card/product-card.component';

import {
  CoursePreviewContainer,
  Title,
  Preview,
} from './course-preview.styles';

const CoursePreview = ({ title, products }) => {
  return (
    <CoursePreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CoursePreviewContainer>
  );
};

export default CoursePreview;

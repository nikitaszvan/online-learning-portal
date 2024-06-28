
import {
  CardImage,
  CardCourseInfoContainer,
  CardCourseProgressBar,
  CardCourseTitle,
  CardTag,
  DirectoryItemContainer,
} from './directory-item.styles';

import { Skeleton } from '../skeleton-loader/skeleton-loader.styles';

import 'react-loading-skeleton/dist/skeleton.css';
import { images } from '../../utils/load-images/load-images.utils';

const DirectoryItem = ({
  course,
  course: {
    courseDepartment = '',
    lecturerName = '',
    totalTasks = '',
    completedTasks = '',
    courseName = '',
    courseCode = '',
    imageUrl = ''
  } = {},
  courseId,
  primaryColour,
  accentColour
}) => {

  const getImagePath = (courseId) => {
    const imageName = `lecturer-${courseId}.jpg`;
    return images[imageName] || 'default-image-path.jpg'; // Provide a default image path if not found
  };

  const imageSrc = getImagePath(courseId);

  return (
    <DirectoryItemContainer>
      { course ? 
      <>
        <CardImage imageUrl={imageUrl} />
        <CardTag style={{ backgroundColor: primaryColour, color: accentColour }} cardtagtitle={courseCode} />
        <CardCourseTitle style={{ fontSize: courseName?.length >= 28 ? '1.3rem' : '1.5rem' }} coursenametitle= {courseName}/>
        <CardCourseProgressBar now={Math.trunc((completedTasks / totalTasks) * 100)} progressbarcolour={accentColour} />
        <CardCourseInfoContainer style={{width: '100%'}}>
          <img src={imageSrc} alt={`lecturer-${courseId}`} />
          <div>
            <p>{ lecturerName }</p>
            <p>{ courseDepartment }</p>
          </div> 
        </CardCourseInfoContainer>
      </> :
      <>
        <Skeleton className='card-image-skeleton' />
        <Skeleton className='card-tag-skeleton' />
        <Skeleton className='course-name-skeleton' />
        <Skeleton className='card-progress-skeleton'/>
        <CardCourseInfoContainer style={{width: '100%'}}>
          <Skeleton className='lecturer-image-skeleton'/>
          <div>
            <Skeleton className='lecturer-name-p-skeleton'/>
            <Skeleton className='course-department-p-skeleton'/>      
          </div> 
        </CardCourseInfoContainer>
      </> }
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;

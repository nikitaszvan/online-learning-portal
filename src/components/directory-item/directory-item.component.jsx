
import {
  CardImage,
  CardCourseInfoContainer,
  CardCourseProgressBar,
  CardCourseTitle,
  CardTag,
  DirectoryItemContainer
} from './directory-item.styles';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DirectoryItem = ({ course, courseId, primaryColour, accentColour }) => {

  const courseDepartment = course?.courseDepartment || '';
  const lecturerName = course?.lecturerName || '';
  const totalTasks = course?.totalTasks || '';
  const completedTasks = course?.completedTasks || '';
  const courseName = course?.courseName || '';
  const courseCode = course?.courseCode || '';
  const imageUrl = course?.imageUrl || '';

  return (
    <DirectoryItemContainer>
      {imageUrl ? <CardImage imageUrl={imageUrl} /> : <Skeleton borderRadius={15} width={270} height={135} />}
      <CardTag style={{ backgroundColor: primaryColour, color: accentColour, padding: courseCode? '4px 15px 1.5px 15px' : '0' }}>
        {courseCode || <Skeleton width={70} height={21} borderRadius={50} />}
      </CardTag>
      <CardCourseTitle style={{ fontSize: courseName?.length >= 28 ? '18px' : '22px' }}>
        {courseName || <Skeleton width={250} height={22} />}
      </CardCourseTitle>
      {totalTasks && completedTasks !== undefined ? (
        <CardCourseProgressBar
          now={Math.trunc((completedTasks / totalTasks) * 100)}
          progressbarcolour={accentColour}
        />
      ) : (
        <Skeleton width={270} height={6}/>
      )}
      <CardCourseInfoContainer>
        {courseId ? (
          <img src={require(`../../assets/lecturers/lecturer-${courseId}.jpg`)} alt={`lecturer ${courseId}`} />
        ) : (
          <Skeleton circle={true} width={30} height={30} style={{marginRight: '5px'}}/>
        )}
        <div>
          <p>{lecturerName || <Skeleton width={77} />}</p>
          <p>{courseDepartment || <Skeleton width={87} />}</p>
        </div>
      </CardCourseInfoContainer>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;

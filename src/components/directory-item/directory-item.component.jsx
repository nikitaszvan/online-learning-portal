
import {
  CardImage,
  CardCourseInfoContainer,
  CardCourseProgressBar,
  CardCourseTitle,
  CardTag,
  DirectoryItemContainer
} from './directory-item.styles';


const DirectoryItem = ({ course, courseId }) => {
  const id = courseId;
  const { courseName, courseTerm, imageUrl, currentGrade, showGrade, courseDepartment, lecturerName, totalTasks, completedTasks, courseTag } = course;


  console.log(Math.trunc((completedTasks / totalTasks) * 100));
  return (
    <DirectoryItemContainer /*onClick={onNavigateHandler}*/>
      <CardImage imageUrl={imageUrl} />
      <CardTag>{ courseTag }</CardTag>
      <CardCourseTitle style={{fontSize: courseName.length >= 28 ? '18px' : '22px'}}>{ courseName }</CardCourseTitle>
      <CardCourseProgressBar now={ Math.trunc((completedTasks / totalTasks) * 100) } />
      <CardCourseInfoContainer>
        <img src={require(`../../assets/lecturers/lecturer-${id}.jpg`)} alt={`lecturer ${id}`} />
        <div>
          <p>{ lecturerName }</p>
          <p>{ courseDepartment }</p>
        </div>
      </CardCourseInfoContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

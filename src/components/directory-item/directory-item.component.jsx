
import {
  CardImage,
  CardCourseInfoContainer,
  CardCourseProgressBar,
  CardCourseTitle,
  CardTag,
  DirectoryItemContainer
} from './directory-item.styles';

import * as Color from '@mui/material/colors';


const DirectoryItem = ({ course, courseId, primaryColour, accentColour }) => {
  const id = courseId;
  const { courseName, courseCode,  imageUrl, courseDepartment, lecturerName, totalTasks, completedTasks, courseColour } = course;

  return (
    <DirectoryItemContainer /*onClick={onNavigateHandler}*/>
      <CardImage imageUrl={imageUrl} />
      <CardTag style={{backgroundColor: primaryColour, color: accentColour}}>{ courseCode }</CardTag>
      <CardCourseTitle style={{fontSize: courseName.length >= 28 ? '18px' : '22px'}}>{ courseName }</CardCourseTitle>
      <CardCourseProgressBar now={ Math.trunc((completedTasks / totalTasks) * 100) } progressbarcolour={accentColour}/>
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

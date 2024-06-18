
import {
  CardImage,
  CardCourseInfoContainer,
  CardCourseProgressBar,
  CardCourseTitle,
  CardTag,
  DirectoryItemContainer
} from './directory-item.styles';

import * as Color from '@mui/material/colors';


const DirectoryItem = ({ course, courseId }) => {
  const id = courseId;
  const { courseName, courseCode,  imageUrl, courseDepartment, lecturerName, totalTasks, completedTasks, courseColour } = course;

  console.log(Math.trunc((completedTasks / totalTasks) * 100));
  return (
    <DirectoryItemContainer /*onClick={onNavigateHandler}*/>
      <CardImage imageUrl={imageUrl} />
      <CardTag style={{backgroundColor: `${Color[courseColour][50]}`, color: `${Color[courseColour][300]}`}}>{ courseCode }</CardTag>
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

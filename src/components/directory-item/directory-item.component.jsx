import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleGradeVisibility } from '../../store/courses/courses.action';

import {
  BackgroundImage,
  CardDescription,
  CardHeader,
  CardHeaderText,
  DirectoryItemContainer,
  GradeStatus
} from './directory-item.styles';

const DirectoryItem = ({ course, courseId }) => {
  const id = courseId;
  const { courseName, courseTerm, imageUrl, currentGrade, showGrade } = course;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggle = (id, show) => {
    dispatch(toggleGradeVisibility(id, show));
  }
  // const onNavigateHandler = () => navigate(route);
  const checkColour = (number) => {
    if (number >= 90) {
      return "green";
    } else if (number >= 80 && number < 90) {
      return "blue";
    } else if (number >= 70 && number < 80 ) {
      return "yellow";
    } else if (number >= 60 && number < 70 ) {
      return "orange";
    } else {
      return "red";
    }
  }
  
  return (
    <DirectoryItemContainer /*onClick={onNavigateHandler}*/>
      <CardHeader>
        <GradeStatus style={{backgroundColor: showGrade? checkColour(currentGrade) : 'grey'}} onClick={() => handleToggle(id, showGrade)}><p>{ showGrade && currentGrade }</p></GradeStatus>
        <CardHeaderText>
          <h2 style={{fontSize: courseName.length >= 26 ? '1.6rem' : '2.325rem' , marginTop: courseName.length >= 26 ? '15px' : '10px'}}>{ courseName }</h2>
          <p>{ courseTerm }</p>
        </CardHeaderText>
      </CardHeader>
      <BackgroundImage imageUrl={imageUrl} />
      <CardDescription> 
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </CardDescription>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

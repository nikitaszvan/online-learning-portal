import { useNavigate } from 'react-router-dom';

import {
  BackgroundImage,
  CardDescription,
  CardHeader,
  CardHeaderText,
  DirectoryItemContainer,
  GradeStatus
} from './directory-item.styles';

const DirectoryItem = ({ course }) => {
  const { courseName, courseTerm, imageUrl, currentGrade } = course;
  const navigate = useNavigate();

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
      return "red"; // assuming anything else is failing grade or unspecified
    }
  }
  
  return (
    <DirectoryItemContainer /*onClick={onNavigateHandler}*/>
      <CardHeader>
        <GradeStatus style={{backgroundColor: checkColour(currentGrade)}}><p>{ currentGrade }</p></GradeStatus>
        <CardHeaderText>
          <h2>{ courseName }</h2>
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

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

  return (
    <DirectoryItemContainer /*onClick={onNavigateHandler}*/>
      <CardHeader>
        <GradeStatus><p>{ currentGrade }</p></GradeStatus>
        <CardHeaderText>
          <h2>{ courseName }</h2>
          <p>{ courseTerm }</p>
        </CardHeaderText>
      </CardHeader>
      <BackgroundImage imageUrl={imageUrl} />
      <CardDescription> 
        <h2>{courseName}</h2>
      </CardDescription>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

import { useNavigate } from 'react-router-dom';

import {
  BackgroundImage,
  CardDescription,
  CardHeader,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ course }) => {
  const { courseName, courseTerm, imageUrl } = course;
  const navigate = useNavigate();

  // const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer /*onClick={onNavigateHandler}*/>
      <CardHeader>
        <h1>{ courseName }</h1>
        <h3>{ courseTerm }</h3>
      </CardHeader>
      <BackgroundImage imageUrl={imageUrl} />
      <CardDescription> 
        <h2>{courseName}</h2>
      </CardDescription>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

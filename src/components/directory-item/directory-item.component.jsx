import { useState, Fragment } from 'react'
import {
  CardImage,
  CardCourseInfoContainer,
  CardCourseProgressBar,
  CardCourseTitle,
  CardTag,
  DirectoryItemContainer,
} from './directory-item.styles';

import Skeleton from '../skeleton-loader/skeleton-loader.component';
import { images } from '../../utils/load-images/load-images.utils';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const DirectoryItem = ({
  cardForm,
  course,
  course: {
    courseDepartment = '',
    lecturerName = '',
    totalTasks = '',
    completedTasks = '',
    courseName = '',
    courseCode = '',
    imageUrl = '',
    courseTerm = ''
  } = {},
  courseId,
  primaryColour,
  accentColour
}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverKey, setPopoverKey] = useState(null);


  const handlePopoverOpen = (event, key) => {
    setAnchorEl(event.currentTarget);
    setPopoverKey(key);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverKey(null);
  };

  const getImagePath = (courseId) => {
    const imageName = `lecturer-${courseId}.jpg`;
    return images[imageName] || 'default-image-path.jpg'; // Provide a default image path if not found
  };

  const imageSrc = getImagePath(courseId);

  return (
    <DirectoryItemContainer cardForm = {cardForm}>
      { course ? 
      <>
        <CardImage imageUrl={imageUrl} cardForm = {cardForm}/>
        <CardTag style={{ backgroundColor: primaryColour, color: accentColour }} cardtagtitle={courseCode} cardForm = {cardForm}/>
        
        <CardCourseTitle style={{ fontSize: courseName?.length >= 28 ? '1.5em' : '1.7rem', marginBlock: courseName?.length >= 28 && '0.8rem' }} coursenametitle= {courseName} cardForm = {cardForm}/>
        <Typography
              aria-owns={popoverKey === courseId ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={(event) => handlePopoverOpen(event, courseId)}
              onMouseLeave={handlePopoverClose}
            >
            <CardCourseProgressBar now={Math.trunc((completedTasks / totalTasks) * 100)} progressbarcolour={accentColour} cardForm = {cardForm}/>
            </Typography>
            <Popover
              id="mouse-over-popover"
              sx={{ pointerEvents: 'none' }}
              open={popoverKey === courseId}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>{completedTasks}/{totalTasks} tasks completed</Typography>
            </Popover> 
        <CardCourseInfoContainer cardForm = {cardForm}>
          <img src={imageSrc} alt={`lecturer-${courseId}`} />
          <div>
            <p>{ lecturerName }</p>
            <p>{ courseDepartment }</p>
          </div> 
        </CardCourseInfoContainer>
        {!cardForm && <p style={{order: !cardForm ? '999' : '0', width: 'fit-content', margin: '0'}}>{ courseTerm }</p>}
      </> :
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <CardCourseInfoContainer>
          <Skeleton />
          <div>
            <Skeleton />
            <Skeleton />      
          </div> 
        </CardCourseInfoContainer>
      </> }
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;

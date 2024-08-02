import { useState, useEffect } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import { useSelector } from 'react-redux';
import * as Color from '@mui/material/colors';
import DynamicIcon from '../dynamic-icon.component';
import { 
  DirectoryContainer,
  DirectoryHeaderContainer,
  CourseCardsContainer,
 } from './directory.styles';
import {
  selectCoursesMap,
} from '../../store/courses/courses.selector';

const Directory = () => {
  const [loading, setLoading] = useState(true);
  const [coursesCardForm, setCoursesCardForm] = useState(true);
  const coursesMap = useSelector(selectCoursesMap);

  useEffect(() => {
    if (Object.keys(coursesMap).length > 0) {
      setLoading(false);
    }
  }, [coursesMap]);

  const renderPlaceholders = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <DirectoryItem key={index} cardForm = {coursesCardForm}/>
    ));
  };

  const renderCourses = () => {
    return Object.entries(coursesMap).map(([key, course]) =>{ 
      const { courseSlug, courseColour} = course
      return (
        <DirectoryItem 
          redirectpath={`/course/${courseSlug}`}
          key={key} 
          cardForm = {coursesCardForm}
          course={course} 
          courseId={key} 
          primaryColour={Color[courseColour][50]} 
          accentColour={Color[courseColour][400]}
        />
    )})
  };

  return (
    <DirectoryContainer>
      <DirectoryHeaderContainer>
        {coursesCardForm ? <DynamicIcon iconName='MenuOutlined' onclick={ () => setCoursesCardForm(!coursesCardForm) }/> :
        <DynamicIcon iconName='Apps' onclick={ () => setCoursesCardForm(!coursesCardForm) }/>}
      </DirectoryHeaderContainer>
      <CourseCardsContainer className={coursesCardForm ? 'grid-layout' : 'block-layout'}>
        {!coursesCardForm && 
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', paddingInline: '2rem'}}>
            <p style={{width: '18%', textAlign: 'center'}}>Instructor Name and Faculty</p>
            <p style={{width: '8.5%', textAlign: 'center'}}>Course Code</p>
            <p style={{width: '35%', textAlign: 'center'}}>Course Name</p>
            <p style={{width: '16%', textAlign: 'center'}}>Course Progress</p>
            <p style={{width: '6%', textAlign: 'center'}}>Term</p>
          </div>}
        {loading ? renderPlaceholders() : renderCourses()}
      </CourseCardsContainer>
    </DirectoryContainer>
  );
};

export default Directory;

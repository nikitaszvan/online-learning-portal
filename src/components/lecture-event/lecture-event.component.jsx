import { 
    AddReminderButton,
    CourseNameAndCodeContainer,
    CourseTimeAndLecturerContainer,
    CourseVenueContainer,
    LectureEventContainer
 } from './lecture-event.styles';

 import DynamicIcon from '../dynamic-icon.component';

const LectureEventCard = ({ course, backgroundColour, accentColour }) => {
    const { courseName, courseCode, lecturerName, courseVenue, courseTime } = course;
  return (
    <LectureEventContainer backgroundColour={ backgroundColour } accentColour={ accentColour }>
      <CourseNameAndCodeContainer>
          <h3 style={{fontSize: courseName.length >= 28 ? '18px' : '22px'}}>{ courseName }</h3>
          <div><p>{ courseCode }</p></div>
      </CourseNameAndCodeContainer>
      <CourseTimeAndLecturerContainer>
        <p>{ courseTime }</p>
        <p>Dr. { lecturerName }</p>
      </CourseTimeAndLecturerContainer>
      <CourseVenueContainer>
        <p>Venue: { courseVenue }</p>
      </CourseVenueContainer>
      <AddReminderButton>
        <DynamicIcon iconName='Alarm'/>
        <p>ADD REMINDER</p>
      </AddReminderButton>
    </LectureEventContainer>
  )
}

export default LectureEventCard;
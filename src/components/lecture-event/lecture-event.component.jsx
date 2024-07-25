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
          <h3 style={{fontSize: courseName.length >= 28 ? '1.3rem' : '1.4rem', whiteSpace: courseName.length >= 28 ? 'wrap' : 'nowrap'}}>{ courseName }</h3>
          <div><p>{ courseCode }</p></div>
      </CourseNameAndCodeContainer>
      <CourseTimeAndLecturerContainer>
        <p>{ courseTime }</p>
        <p>Dr. { lecturerName }</p>
      </CourseTimeAndLecturerContainer>
      <CourseVenueContainer>
        <p>Venue: { courseVenue }</p>
      </CourseVenueContainer>
      <AddReminderButton href='https://calendar.app.google/gqRariTk1bKp5zLr6' target="_blank">
        <DynamicIcon iconName='Alarm'/>
        <p>ADD REMINDER</p>
      </AddReminderButton>
    </LectureEventContainer>
  )
}

export default LectureEventCard;
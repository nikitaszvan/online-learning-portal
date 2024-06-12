import styled from 'styled-components';

export const CoursePageContainer = styled.div`
    width: 100%;
    border-top: 1px solid grey;
    background-color: #F9F9F9;
    height: 100%;
`

export const MainCourseContentContainer = styled.div`
    display: flex;
    height: 550px;
    background-color: #F9F9F9;
    gap: 20px;

    >* {
        border-radius: 15px;
    }
`

export const CourseAnnouncementContainer = styled.div`
    background-color: white;
    height: 100%;
    flex: 2;
`

export const UpcomingEventsContainer = styled.div`
    background-color: white;
    flex: 1;
`
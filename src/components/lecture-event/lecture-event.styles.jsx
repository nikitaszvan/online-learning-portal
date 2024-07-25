import styled from 'styled-components';

export const LectureEventContainer = styled.div`
    margin: 2px auto 10px auto;
    position: relative;
    border-radius: 10px;
    background-color:  ${props => props.backgroundColour};
    color: black;
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(149, 157, 165, 0.3) 0px 4px 8px;
    z-index: 5;
    min-width: 260px;
    flex: 1;


    h3 {
        font-weight: 600;
        color: ${props => props.accentColour};
    }

`

export const CourseNameAndCodeContainer = styled.div`
    display: flex;
    justify-content: space-between;

    h3 {
        // width: 70%;
    }

    > div {
        background-color: white;
        padding: 6px 8px;
        margin-left: 1rem;
        border-radius: 8px;
        height: fit-content;

        > p {
            margin: 0;
            color: black;
            font-weight: 600;
            white-space: nowrap;
        }
    }
`

export const CourseTimeAndLecturerContainer = styled.div`
    > p {
        margin: 0;
    }

    > p:nth-child(1) {
        font-size: 12px;
        color: #6B6B6B;
        font-weight: 600;
    }

    > p:nth-child(2) {
        font-weight: 600;
    }
`

export const CourseVenueContainer = styled.div`
    padding-top: 15px;
    border-top: 1px solid gray;

    > p {
        display: inline-block;
        margin: 0;
    }
`

export const AddReminderButton = styled.a`
    margin-top: 8px;
    border: none;
    background-color: white;
    display: flex;
    align-self: center;
    width: 100%;
    padding: 5px 0;
    justify-content: center;
    gap: 5px;
    border-radius: 5px;
    font-weight: 600;
    svg {
        color: black;
    }

    p {
        margin: 0;
    }
`
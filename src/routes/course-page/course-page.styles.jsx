import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import ReactStyledProgressBar from '../../components/course-progress-bar/course-progress-bar.component';


export const CoursePageContainer = styled.div`
    display: flex;
    max-height: calc(100vh - 5rem);
    overflow-y: auto;
    width: 100%;
    padding: 3rem;

`

export const FirstColumnContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const SecondColumnContainer = styled.div`
    flex: 1;
`


export const CoursePageSectionHeader = styled.h3`
    font-size: 1.6rem;
    font-weight: 500;
`
export const SyllabusContainer = styled.div`

    > div:nth-of-type(1) {
        display: flex;
        align-items: center;
        gap: 2rem;

        svg {
            font-size: 3rem;
        }

        h3 {
            font-size: 1.5rem;
        }
    }

    > div:nth-of-type(2) {

        display: flex;
        justify-content: center;

        p {
            color: blue;
            font-size: 1.4rem;
            font-weight: 500;
            cursor: pointer;
            margin-inline: 2rem;
        }   
    }
    
`

export const AssignmentsContainer = styled.div`

`

export const AssignmentsHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;

    > div {
        display: flex;
        width: 40%;
        gap: 1rem;
        align-items: center;

        > p {
            margin: 0;
        }
    }
`

export const AssignmentsAndQuizzesListContainer = styled(Accordion)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    > div > div {
        display: flex;
        width: 50%;

        .progress {
            width: 30%;
            height: 0.6rem;
        }
    }
`

export const ProgressBar = styled(ReactStyledProgressBar)`
    flex: 1;
    height: 0.5rem;
`

export const GradesContainer = styled.div`
    > p:nth-of-type(1) {
        font-size: 12px;
        font-style: italic;
    }
`

export const GradesHeader = styled.div`
    display: flex;
    justify-content: space-between;

    > svg {
        font-size: 25px;
    }
`

export const GradeColumnHeading = styled.div`
    display: flex;
    background-color: #F0F0F0;
    color: #707275;
    align-items: center;
    padding-block: 0.6rem;
    padding-inline: 4rem;

    > p {
        width: 25%;
        font-weight: 700;
        font-style: italic;
        font-size: 11px;
        margin: 0;
    }
    
     > p:nth-of-type(1) {
        width: 50%;
    }

    > p:nth-of-type(2), > p:nth-of-type(3) {
        text-align: right;
    }
`
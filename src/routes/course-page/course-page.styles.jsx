import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import ReactStyledProgressBar from '../../components/course-progress-bar/course-progress-bar.component';


export const CoursePageContainer = styled.div`
    display: flex;
    max-height: calc(100vh - 5rem);
    overflow-y: auto;
    width: 100%;
    padding: 3rem 6rem;
    justify-content: space-between;
    gap: 6rem;
`

export const FirstColumnContainer = styled.div`
    flex: 1 1 30%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const SecondColumnContainer = styled.div`
    flex: 1 1 30%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`


export const CoursePageSectionHeader = styled.h3`
    font-size: 1.6rem;
    font-weight: 500;
`
export const SyllabusContainer = styled.div`
    display: flex;
    flex-direction: column;

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

    
`

export const SyllabusButtonContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    justify-self: start;
    margin-left: 25%;

    > p {
        color: blue;
        font-size: 1.4rem;
        font-weight: 500;
        cursor: pointer;
        margin-inline: 2rem;
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

    > button {
        border: none;
        background-color: transparent;
    }

    > button > svg {
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

export const LineChartContainer = styled.div`

`

export const CustomTooltipStyled = styled.div`
    > p:nth-of-type(1) {
        font-weight: 600;
    }
`

export const AnnouncementContainer = styled.div`

    > p:nth-of-type(1) {
        margin-bottom: 1.5rem;
    }

    > p {
        text-indent: 5rem;
    }

`
export const AnnouncementHeader = styled(CoursePageSectionHeader)`
    color: blue;
`

export const AnnouncementImage = styled.div`
    position: relative;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    width: 50%;
    min-width: 250px;
    aspect-ratio: 1.3 / 1;
    float: left;
    margin-right: 1rem;
    margin-top: 0.5rem;
`

export const AnnouncementParagraph = styled.p`
    font-size: 1.3rem;
    line-height: 2rem;
`
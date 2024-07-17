import styled from 'styled-components';

export const CoursePageContainer = styled.div`
    display: flex;
    max-height: calc(100vh - 5rem);
    overflow-y: auto;
    width: 100%;

`

export const FirstColumnContainer = styled.div`
    flex: 1;
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

export const AssignmentsAndQuizzesContainer = styled.div`

    > div {
        display: flex;
    }
    
    > div > div {
        display: flex;
        width: 50%;

        .progress {
            width: 30%;
            height: 0.6rem;
        }
    }

    

`
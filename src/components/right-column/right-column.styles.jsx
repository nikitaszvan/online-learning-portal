import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

export const CarouselStyled = styled(Carousel)`
    .carousel-control-next-icon {
        .carousel-control-prev, .carousel-control-next {
            color: black;
        }

`

export const LectureEventCard = styled.div`
    height: 250px;
`

export const RightColumnContainer = styled.div`
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    width: 23%;
    padding: 1% 2%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 5;

    > svg 
        align-self: flex-end;
    }
`;

export const TaskList = styled.div`
`

export const TaskListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h3 {
        font-weight: 600;
        font-size: 13px;
    }

    div:nth-child(2) {
        display: flex;

        > p {
            margin: 0;
        }

    }
`

export const SortByButton = styled.div`
    display: flex;
    background-color: rgba(231, 231, 231, 0.85);
    border-radius: 15px;
    padding: 3px 10px;
    gap: 5px;

    > * {
        color: black;
    }
`

export const AddTaskButton = styled.div`
    background-color: rgba(231, 231, 231, 0.85);
    border-radius: 15px;
    padding: 3px;
`

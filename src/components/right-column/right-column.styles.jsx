import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

export const RightColumnContainer = styled.div`
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    width: 30%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 5;
    align-items: center;
    min-width: 442px;
    height: 90vh;
`;

export const LectureEventHeader = styled.div`

    align-self: flex-start;
    color: black;
    margin: 25px 0 0 45px;

    > * {
        margin: 0;
    }

    > h2 {
        font-size: 18px;
        font-weight: 600;
    }
    > p {
        font-weight: 600;
        font-size: 12px;
        color: gray;
        margin-left: 10px;
        margin-top: 10px;
    }
`

export const CarouselStyled = styled(Carousel)`
    &.carousel {
        padding: 0 40px 40px 40px;
    }

    .carousel-control-next-icon, .carousel-control-prev-icon {
        position: relative;
        bottom: 10%;
    }
`
export const TaskList = styled.div`
    padding: 0 45px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 220px;
`

export const TaskListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h2 {
        font-weight: 600;
        font-size: 18px;
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

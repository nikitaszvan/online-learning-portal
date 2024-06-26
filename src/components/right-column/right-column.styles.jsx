import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

export const RightColumnContainer = styled.div`
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 5;
    align-items: center;
    overflow: hidden;
    // ${(props => props.collapsecolumn ? 'min-width: unset' : 'min-width: 205px;')};

    > *:not(svg:nth-child(1), svg:nth-child(5)) {

        ${(props => props.collapsecolumn ? 'left: 50%;' : 'left: 0;')};
        transition: left 1s ease;
    }

    width: ${(props => props.collapsecolumn ? '1.5%' : '30%')};
    transition: width 1s ease;
    max-width: 315px;


    > svg:nth-child(1) {
        align-self: flex-start;
        font-size: 2rem;
        display: block;
        transition: transform 1s ease;
         ${(props => props.collapsecolumn ? 'transform: rotate(180deg)' : '')};
    }
`;


export const LectureEventHeader = styled.div`

    align-self: flex-start;
    color: black;
    margin-top: 0.7rem;
    margin-left: 1.7rem;
    position: relative;

    > * {
        margin: 0;
    }

    > h2 {
        font-size: 1.6rem;
        font-weight: 600;
    }
    > p {
        font-weight: 600;
        font-size: 1.1rem;
        color: gray;
        margin-left: 1.2rem;
        margin-top: 0.6rem;
    }
`

export const CarouselStyledContainer = styled.div`
    position: relative;
    margin-inline: auto;
`

export const CarouselStyled = styled(Carousel)`
   
    &.carousel {
        padding: 0 4.5rem 4.5rem 4.5rem;
    }

    .carousel-control-next-icon, .carousel-control-prev-icon {
        position: relative;
        bottom: 10%;
    }
`

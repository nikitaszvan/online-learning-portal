import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

export const RightColumnContainer = styled.div`
    background-color: var(--color-primary);
    display: flex;
    position: relative;
    flex-direction: column;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 5;
    align-items: center;
    overflow: hidden;
    // ${(props => props.collapsecolumn ? 'min-width: unset' : 'min-width: 405px;')};

    > *:not(svg:nth-child(1), svg:nth-child(5)) {

        ${(props => props.collapsecolumn ? 'left: 50%;' : 'left: 0;')};
        transition: left 1s ease;
    }

    width: ${(props => props.collapsecolumn ? '1.5%' : '40%')};
    transition: width 1s ease;
    max-width: 415px;


    > svg:nth-child(1) {
        align-self: flex-start;
        font-size: 24px;
        display: block;
        transition: transform 1s ease;
         ${(props => props.collapsecolumn ? 'transform: rotate(180deg)' : '')};
    }
`;


export const LectureEventHeader = styled.div`

    align-self: flex-start;
    color: black;
    margin: 25px 0 0 45px;
    position: relative;

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

export const CarouselStyledContainer = styled.div`
    position: relative;
    margin: 0 auto;
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

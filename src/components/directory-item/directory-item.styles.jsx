import styled from 'styled-components';
import { Link }from 'react-router-dom';

export const DirectoryItemContainer = styled(Link)`

  display: flex;
  background-color: var(--color-primary);
  // align-items: flex-start;
  justify-content: space-between;
  padding: 1.3em;
  // box-shadow: 0.5rem 0.5rem 0.5rem 0px rgba(180,180,180,0.85);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;

  ${( props => props.cardform.toLowerCase() === 'true' ? 
    `
    // width: calc(23rem+40%);
    max-width: 350px;
    height: 23rem;
    flex-direction: column;
    border-radius: 18px;
    justify-content: space-between;

    &:hover {
      cursor: pointer;
      transform: translateY(-10px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

      ${CardImage} {
        background-size: 120%;
        transition: background-size 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
    }

    ` : 
    `
    border-radius: 5px;
    width: 100%;
    height: 7rem;
    flex-direction: row;
    align-items: center;
    min-width: 600px;
    margin-block: 1rem;
    padding-inline: 2rem;
    `)}

  > .styled-progress-bar {
    order: 3;
    ${( props => props.cardform?.toLowerCase() === 'false' ? 'width: 12%' : 'width: 100%')}; 
  }
  

  > .skeleton-loader:nth-child(1) {
    width: 100%;
    height: 45%;
    border-radius: 15px;
    align-self: center;
  }


  > .skeleton-loader:nth-child(2) {
    border-radius: 50px;
    color: #E57373;
    height: 1.5rem;
    font-weight: 600;
    width: 6.3rem;
    padding: 0.4rem 1.5rem 1.5rem 1.5rem;
  }

  > .skeleton-loader:nth-child(3) {
    margin: 0;
    width: 85%;
    height: 2rem;
    display: flex;
    align-items: center;
  }

  > .skeleton-loader:nth-child(4) {
    width: 100%;
    height: 0.7rem;
    margin-block: 0.3rem;
  }

  > div > .skeleton-loader:nth-child(1) {
    width: 15%;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }

  > div > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .skeleton-loader:nth-child(1) {
      height: 1rem;
      margin-top: 0.3rem;
      width: 8rem;
      margin-block: 0.3rem;
      
    }

    .skeleton-loader:nth-child(2) {
      height: 0.8rem;
      width: 10rem;
      margin-block: 0.3rem;
    }
  }
}

 @media (max-width: 481px) {
        max-width: unset;
        width: 90%;
      }
 
`;

export const CardImage = styled.div`
    width: 100%;
    height: 48%;
    border-radius: 1.3em;
    background-size: 100%;
    background-position: center;
    align-self: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    display: ${( props => props.cardform.toLowerCase() === 'false' ? 'none' : 'block')};
    overflow: hidden;
`;

export const CardTag = styled.div`
  border-radius: 50px;
  color: #E57373;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 1.5rem;
  margin-top: 0.5rem;
  order: ${( props => props.cardform.toLowerCase() === 'true' ? '0' : '1')}; 
  width: fit-content;
  white-space: nowrap;
  ${( props => props.cardform.toLowerCase() === 'false' && ' height: fit-content')};

    &::before {
    content: '${(props => props.cardtagtitle && props.cardtagtitle)}';
  }
`



export const CardCourseTitle = styled.h2`
  margin: 0;
  max-height: 3rem;
  display: flex;
  align-items: center;
  order: 2;
  ${( props => props.cardform.toLowerCase() === 'false' && 'width : 35%')};

      &::before {
    content: '${(props => props.coursenametitle && props.coursenametitle)}';
  }
`

export const CardCourseInfoContainer = styled.div`

  display: flex;
  gap: 0.4rem;
  margin-top: 0.3rem;
  ${( props => props.cardform.toLowerCase() === 'true' && 'width: 100%')};
  ${( props => props.cardform.toLowerCase() === 'false' && 'width: 18%; min-width: 110px; height: 100%')};
  order: ${( props => props.cardform.toLowerCase() === 'false' ? '0' : '4')}; 

  img {
    ${( props => props.cardform.toLowerCase() === 'false' ? 'height: 100%' : 'width: 10%')};
    ${( props => props.cardform.toLowerCase() === 'false' && 'margin-right: 1rem')};
    aspect-ratio: 1 / 1;
    border-radius: ${( props => props.cardform.toLowerCase() === 'false' ? '20%' : '50%')};
  }

  > div {
    align-self: center;
    > p {
      margin: 0;
    }

    > p:first-of-type {
      font-size: ${( props => props.cardform.toLowerCase() === 'false' ? '1.3rem' : '1rem')};
      font-weight: 500;
    }

    > p:nth-child(2) {
      font-size: ${( props => props.cardform.toLowerCase() === 'false' ? '1rem' : '0.8rem')};
    }
}

`;

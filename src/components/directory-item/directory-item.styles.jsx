import styled from 'styled-components';
import { ProgressBar } from 'react-bootstrap';

export const DirectoryItemContainer = styled.div`
  width: 298px;
  height: 293px;
  flex-direction: column;
  background-color: var(--color-primary);
  display: flex;
  border-radius: 15px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 12px 14px;
  // box-shadow: 3px 3px 3px 0px rgba(180,180,180,0.85);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:hover {
    cursor: pointer;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 15px;
  background-size: cover;
  background-position: center;
  align-self: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CardTag = styled.div`
  border-radius: 50px;
  background-color: var(--color-secondary-var);
  color: var(--color-on-primary);
  font-size: 10px;
  font-weight: 600;
  padding: 4px 15px 1.5px 15px;
`

export const CardCourseTitle = styled.h2`
  font-size: 16px;
  margin: 0;
  width: 274px;
  height: 38.4px;
  display: flex;
  align-items: center;
`
export const CardCourseProgressBar = styled(ProgressBar)`
  width: 100%;
  height: 6px;
  background-color: #D9D9D9;
  
  .progress-bar {
    background-color: #702DFF;
  }

`

export const CardCourseInfoContainer = styled.div`

  display: flex;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 5px;
  }  

  > div {
  display: flex;
  flex-direction: column;
    justify-content: space-between;
    > p {
      margin: 0;
    }

    > p:first-of-type {
      font-size: 11px;
    }

    > p:nth-child(2) {
      font-size: 8px;
    }
}

`;


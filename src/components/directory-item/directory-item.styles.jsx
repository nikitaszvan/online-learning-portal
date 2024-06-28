import styled from 'styled-components';
import { ProgressBar } from 'react-bootstrap';

export const DirectoryItemContainer = styled.div`
  // width: 298px; //w/h = 1.02
  // height: 293px;
   width: 22rem; //w/h = 1.02 h/w = 0.98
  height: calc(22rem*0.98);
  flex-direction: column;
  background-color: var(--color-primary);
  display: flex;
  border-radius: 15px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.9em 1.1em;
  // box-shadow: 0.5rem 0.5rem 0.5rem 0px rgba(180,180,180,0.85);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;


  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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
  color: #E57373;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 1.5rem;

    &::before {
    content: '${(props => props.cardtagtitle && props.cardtagtitle)}';
  }
`



export const CardCourseTitle = styled.h2`
  margin: 0;
  width: 100%;
  max-height: 3rem;
  display: flex;
  align-items: center;

      &::before {
    content: '${(props => props.coursenametitle && props.coursenametitle)}';
  }
`
export const CardCourseProgressBar = styled(ProgressBar)`
  width: 100%;
  height: 0.5rem;
  background-color: #D9D9D9;
  
  .progress-bar {
    background-color: ${props => props.progressbarcolour};
  }

`

export const CardCourseInfoContainer = styled.div`

  display: flex;
  gap: 0.4rem;
  width: 100%;

  img {
    width: 15%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
  }

  > div {
    > p {
      margin: 0;
    }

    > p:first-of-type {
      font-size: 1rem;
      margin-top: 0.3rem;
    }

    > p:nth-child(2) {
      font-size: 0.8rem;
    }
}

`;

export const Skeleton = styled.div`
  --base-color: #ebebeb;
  --highlight-color: #f5f5f5;
  --animation-duration: 1.5s;
  --animation-direction: normal;
  --pseudo-element-display: block; /* Enable animation */

  background-color: var(--base-color);

  width: 100%;
  border-radius: 0.25rem;
  display: inline-flex;
  line-height: 1;
  position: relative;
  user-select: none;
  overflow: hidden;

  ::after {
  content: ' ';
  display: var(--pseudo-element-display);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient(
    90deg,
    var(--base-color),
    var(--highlight-color),
    var(--base-color)
  );
  transform: translateX(-100%);

  animation-name: react-loading-skeleton;
  animation-direction: var(--animation-direction);
  animation-duration: var(--animation-duration);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  }
  
  @media (prefers-reduced-motion) {
    .react-loading-skeleton {
      --pseudo-element-display: none; /* Disable animation */
    }
  }
  
  &.card-image-skeleton {
    width: 100%;
    height: 50%;
    border-radius: 15px;
    align-self: center;
  }


  &.card-tag-skeleton {
    border-radius: 50px;
    color: #E57373;
    height: 1.5rem;
    font-weight: 600;
    width: 6.3rem;
    padding: 0.4rem 1.5rem 1.5rem 1.5rem;
  }

  &.course-name-skeleton {
    margin: 0;
    width: 85%;
    height: 2rem;
    display: flex;
    align-items: center;
  }

  &.card-progress-skeleton {
    width: 100%;
    height: 0.5rem;
  }

  &.lecturer-image-skeleton {
    width: 20%;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }

  &.lecturer-name-p-skeleton {
    height: 1rem;
    margin-top: 0.3rem;
    width: 8rem;
  }

  &.course-department-p-skeleton {
    height: 0.8rem;
    width: 10rem;
  }

}
`;


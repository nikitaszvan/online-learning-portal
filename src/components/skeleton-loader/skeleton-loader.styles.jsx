import styled from 'styled-components';

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
`;
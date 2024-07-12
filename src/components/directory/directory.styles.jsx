import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  padding-inline: 2rem;
  padding-top: 1rem;
  overflow-y: auto;
  max-height: calc(100vh - 48px);
  box-sizing: border-box;
  flex: 1;
  // height: fit-content;
  min-width: fit-content;
  position: relative;
`

export const DirectoryHeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;

  > svg {
    cursor: pointer;
    font-size: 2.5rem;
  }
`

export const CourseCardsContainer = styled.div`
    &.block-layout {
      display: block;
    }

    &.grid-layout {
      display: grid;
      gap: 2rem 2rem;
      grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    }

    > a {
      width: fit-content;
    }
`;

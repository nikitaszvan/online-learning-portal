import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  padding-top: 1rem;
  overflow-y: auto;
  height: 100%;
  max-height: calc(100vh - 5rem);
  box-sizing: border-box;
  flex: 1;
  padding-inline: 2rem;
`

export const DirectoryHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1097px) {
    > button {
      display: none;
    }
  }
    > button {
    border: none;
    background-color: transparent;
    
      > svg {
      cursor: pointer;
      font-size: 2.5rem;
      }
    } 
  
`

export const CourseCardsContainer = styled.div`
    &.block-layout {
      display: block;
    }

    &.grid-layout {
      display: grid;
      gap: 2rem 2rem;
      grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    }

    > a {
      // width: fit-content;
    }
`;

import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  padding-top: 1rem;
  overflow-y: auto;
  height: 100%;
  max-height: calc(100vh - 5rem);
  box-sizing: border-box;
  flex: 1;
  padding-inline: 2rem;

  @media (max-width: 450px) {
    padding-inline: 0.5rem;
  }

`

export const DirectoryHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2.5rem;
  @media (max-width: 1097px) {
    > button {
      display: none;
    }
  }
    > button {
    border: none;
    background-color: transparent;
    margin-left: auto;
    
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
      margin-inline: 2rem 1rem;
      @media (max-width: 481px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-inline: 1rem 0.5rem;
      }
    }

    > a {
      // width: fit-content;
    }
`;

import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  padding: 2%;
  padding-bottom: 0;
  padding-top: 1%;
  overflow-y: scroll;
  flex-grow: 1;
`

export const DirectoryHeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

export const CourseCardsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  
  > * {
    margin-bottom: 5%;
  }
`;

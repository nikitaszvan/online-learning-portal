import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  padding: 2%;
  padding-bottom: 0;
  padding-top: 1%;
  overflow-y: scroll;
  max-height: 97vh;
`

export const DirectoryHeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

export const CourseCardsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 3%;
  flex-wrap: wrap;
  height: fit-content;
  
  > * {
    margin-bottom: 5%;
  }
`;

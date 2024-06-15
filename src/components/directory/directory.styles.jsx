import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  background-color: #F9FAFC;
  padding: 2%;
  padding-top: 1%;
  border-radius: 10px;
  max-width: 1050px;
`

export const DirectoryHeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

export const CourseCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 3%;
  
  > * {
    margin-bottom: 5%;
  }
`;

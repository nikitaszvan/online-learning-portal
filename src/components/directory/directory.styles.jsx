import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  background-color: #F9F9F9;
  padding: 2%;
  padding-top: 1%;
  border-radius: 10px;
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

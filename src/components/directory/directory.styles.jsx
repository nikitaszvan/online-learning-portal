import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  padding: 2%;
  padding-top: 1%;
  border-radius: 10px;
  
`

export const DirectoryHeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

export const CourseCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6%;
  justify-content: center;
  
  > * {
    margin-bottom: 5%;
  }
`;

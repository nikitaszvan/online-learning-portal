import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  background-color: #F9F9F9;
  padding: 2%;
  padding-top: 1%;
  border-radius: 10px;
`

export const DirectoryHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: 1px solid grey;
  }

  svg {
    font-size: 25px;
    color: grey;
  }

  .dropdown-menu {
    padding-left: 10px;
    padding-top: 10px;
  }

  .dropdown-toggle::after {
    border-top-color: grey;
  }
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

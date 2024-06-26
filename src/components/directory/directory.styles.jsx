import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  padding-inline: 2rem;
  padding-top: 1rem;
  overflow-y: scroll;
  max-height: calc(100vh - 48px);
  box-sizing: border-box;
  flex: 1;
`

export const DirectoryHeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

export const CourseCardsContainer = styled.div`
  display: grid;
  gap: 2rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
`;

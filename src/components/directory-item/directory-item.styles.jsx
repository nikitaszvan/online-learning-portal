import styled from 'styled-components';

export const CardHeader = styled.div`
  width: 100%;
  height: 25%;
  background-color: white;

  h1 {

  }

  h3 {

  }
`

export const BackgroundImage = styled.div`
  width: 100%;
  height: 50%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;


export const CardDescription = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  width: 450px;
  height: 500px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;

  &:hover {
    cursor: pointer;
  }
`;

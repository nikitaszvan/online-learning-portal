import styled from 'styled-components';

export const CardHeader = styled.div`
  width: 100%;
  height: 18%;
  background-color: white;
  border-radius: 10px 10px 0 0;
  display: flex;

`

export const CardHeaderText = styled.div`
  display: block;
  
  h2 {
    margin: 0;
    margin-top: 10px;
  }

  p {
    margin: 0;
  }
`
export const GradeStatus = styled.div`
  height: 50%;
  width: 10%;
  border-radius: 50%;
  background-color: red;
  margin: 4.5% 5% 5% 5%;
  display: flex;

  p {
    text-align: center;
    vertical-align: middle;
    line-height: 33px;
    margin: 0;
    height: 100%;
    width: 100%;
    line-weight: 700;
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
  height: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 0 0 10px 10px;
  padding: 10px;

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
  width: 330px;
  height: 363px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 0px rgba(180,180,180,0.85);

  &:hover {
    cursor: pointer;
  }
`;

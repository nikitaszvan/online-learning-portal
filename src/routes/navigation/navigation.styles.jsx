import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 68px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  height: 60%;
  width: 154px;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    margin: 5%;
  }

  img:nth-of-type(2) {
    height: 100px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const VerticalLine = styled.div`
  border-right: 2px solid black;
  height: 100%;
  width: 100px;
  margin-left: 20%;
`

export const NavHeaderRight = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 20%;
  justify-content: space-between;

  svg {
    font-size: 30px;
    color: #68696D;
  }
`

export const NavHeaderRightMiddleIcon = styled.div`
  display: flex;
  border-left: 2px solid #68696D;
  border-right: 2px solid #68696D;
  width: 40%;
  justify-content: space-evenly;

  svg:nth-of-type(1) {
    font-size: 28px;
  }
`

export const ProfileName = styled.h2`
  color: black;
`
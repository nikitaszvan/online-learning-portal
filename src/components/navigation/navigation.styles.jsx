import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 68px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-primary);
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
    font-size: 20px;
    color: #68696D;
  }

  #dropdown-basic {
    background-color: transparent;
    border: none;
  }
`

export const NavHeaderRightMiddleIcon = styled.div`
  display: flex;
  border-left: 2px solid #68696D;
  border-right: 2px solid #68696D;
  width: 30%;
  justify-content: space-evenly;

  svg {
    font-size: 20px;
  }

  svg:nth-child(1) {
    font-size: 18px;
  }
`

export const ProfileName = styled.p`
  font-size: 15px;
  color: black;
  width: 25%;
`
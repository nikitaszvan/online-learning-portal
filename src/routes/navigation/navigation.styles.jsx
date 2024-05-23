import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 68px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  height: 60%;
  width: 154px;

  img {
    width: 100%;
    height: 100%;
    margin: 5%;
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

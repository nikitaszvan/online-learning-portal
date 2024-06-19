import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

export const NavigationContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-primary);
  border-bottom: 0.12px solid rgba(0, 0, 0, 0.1);
  padding: 0 2%;
  background-color: white;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  height: 60%;
  width: 180px;
  align-items: center;

  img {
    width: 100%;
    height: 80%;
    margin: 5%;
  }

  img:nth-of-type(2) {
    height: 60%;
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
  border-right: 1px solid black;
  height: 80%;
  width: 100px;
  margin: 0 10% 0 5%;
`

export const NavHeaderRight = styled.div`
  width: 250px;
  height: 30%;
  border: 2px solid #D9D9D9;
  border-radius: 8px;
  align-items: center;
  display: flex;
`

export const NavSearchIcon = styled(SearchIcon)`
  margin: 0 10px;
  color: rgb(0, 0, 0, 0.5);
  font-size: 20px;
`

export const NavSearchBar = styled.input`
  border: none;
  color: rgb(0, 0, 0, 0.5);
  font-size: 12.5px;
  user-select: none;

  &::placeholder {
    color: rgb(0, 0, 0, 0.5);
  }

  &:focus {
    outline: none;
  }
`
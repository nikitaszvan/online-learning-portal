import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.15rem solid rgba(0, 0, 0, 0.1);
  padding-inline: 2rem;
  background-color: white;
  height: 5rem;

  > h3 {
    color: black;
    margin: 0;
    font-weight: 500;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  width: 15%;
  align-items: center;
  box-sizing: border-box;
  height: 100%;

  img {
    height: 70%;
    width: auto;
  }

  img:nth-of-type(2) {
    padding-block: 0.3rem;
  }
`;


export const VerticalLine = styled.div`
  border-right: 0.1rem solid black;
  height: 65%;
  margin-inline: 1rem 2.1rem;
`

export const NavHeaderRight = styled.div`
  min-width: 18%;
  height: 2rem;
  border: 0.15rem solid #D9D9D9;
  border-radius: 8px;
  align-items: center;
  display: flex;
`

export const NavSearchIcon = styled(SearchIcon)`
  margin-inline: 0.4rem;
  color: rgb(0, 0, 0, 0.5);
  font-size: 1.3rem;
`

export const NavSearchBar = styled.input`
  border: none;
  color: rgb(0, 0, 0, 0.5);
  font-size: 1.1rem;
  user-select: none;
  height: 100%;

  &::placeholder {
    color: rgb(0, 0, 0, 0.5);
  }

  &:focus {
    outline: none;
  }
`
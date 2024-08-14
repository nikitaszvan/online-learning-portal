import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

export const SearchIconStyled = styled(SearchIcon)`
  margin-inline: 0.4rem;
  color: rgb(0, 0, 0, 0.5);
  font-size: 1.3rem;
`

export const SearchBar = styled.input`
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

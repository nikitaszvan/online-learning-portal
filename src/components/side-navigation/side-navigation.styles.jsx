import styled from 'styled-components';

export const SideNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
  
  .css-dip3t8 {
    background-color: var(--color-primary);
  }

  .css-1wvake5 {
    border: none;
  }

  a.ps-open {
    background-color: var(--color-primary-var);
  }

  a.ps-menu-button {
    border-radius: 8px;
    height: 35px;
    margin: 5px 0;

    &:hover {
      background-color: var(--color-primary-var);
    }
  }

  .css-1tqrhto > a {

    &:hover {
      background-color: var(--color-secondary);
      color: var(--color-on-primary);
      font-weight: 600;
    }
  }
`;

import styled from 'styled-components';

export const SideNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
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
    border-radius: 15px;

    &:hover {
      background-color: var(--color-primary-var);
    }
  }
`;

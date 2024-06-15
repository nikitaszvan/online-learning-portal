import styled from 'styled-components';
import { Sidebar } from 'react-pro-sidebar';

export const SideNavigationContainer = styled(Sidebar)`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 5;
  width: 15%;
  min-width: 150px;
  
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
    padding-right: 5px;

    > .ps-menu-icon {
      margin: 0;
    }

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

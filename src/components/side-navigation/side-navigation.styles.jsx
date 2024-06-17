import styled from 'styled-components';


export const SideNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 5;
  
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

export const BottomSideBarContainer = styled.div`
  margin-top: auto;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;

  a {
    display: flex;
    margin-left: 20px;
    align-items: center;

    p {
      margin: 0;
    }

    svg {
      margin: 0 8.5px;
    }
  }
`
export const UserContainer = styled.div`
  border-top: 0.12px solid rgba(0, 0, 0, 0.1);
  padding: 10px 15px 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  svg {
    font-size: 22px;
  }

  > div {
  
    > * {
      margin: 0;
    }

    > h3 {
      font-size: 14px;
      font-weight: 600;
    }

    > p {
      font-size: 10px;
    }
  }
`

import styled from 'styled-components';

console.log('side-navigation.styles.js has been loaded');

export const SideNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: ${(props => props.isonlyicons ? '5%' : '32%')};
  transition: width 0.6s ease;
  padding-top: 10px;
  max-width: 265px;
  background-color: white;


  li.ps-menuitem-root {
    width: 100%;
  }
  
  .css-dip3t8 {
    background-color: var(--color-primary);
  }

  aside.css-1wvake5 {
    border: none;
    width: 100%;
    min-width: unset;
    
  }

  a.ps-open {
    background-color: var(--color-primary-var);
  }

  a.ps-menu-button {
    border-radius: 8px;
    height: 35px;
    margin: 5px 10px;
    padding: 0;
    padding-right: 10px;
    display: flex;
    ${(props => props.isonlyicons ? 'justify-content: center; padding-right: 0;' : '')};

    > .ps-menu-icon {
      margin: 0;

      > svg {
        font-size: ${(props => props.isonlyicons ? '24px' : '18px')};
        transition: font-size 0.3s ease;
      }
    }

    &:hover {
      background-color: var(--color-primary-var);
    }
  }

  span.ps-menu-label {
    flex-grow: 0;
    font-weight: 500;
    ${(props => props.isonlyicons ? 'width: 0;' : 'width: 100px')};
    text-overflow: clip;
    transition: width 0.8s ease;
  }

  span.ps-menu-icon {
    ${(props => props.isonlyicons && 'justify-self: center;')};
  }

  span.ps-submenu-expand-icon {
    margin-left: auto;
    ${(props => props.isonlyicons ? 'display: none; width: 0;' : 'display: inline-block;')};
  }

  .css-1tqrhto > a {

    &:hover {
      background-color: var(--color-secondary);
      color: var(--color-on-primary);

    }
    padding-left: 20px;
    }
  }

`;

export const BottomSideBarContainer = styled.div`
  margin-top: auto;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props => props.isonlyicons && 'align-items: center' )};
  padding: 10px 0;

  a {
    display: flex;
    margin-left: ${(props => props.isonlyicons ? '0' : '20px')};
    align-items: center;

    p {
      margin: 0;
      display: ${(props => props.isonlyicons ? 'none' : 'flex')};
    }

    svg {
      margin: 0 8.5px;
      font-size: ${(props => props.isonlyicons ? '24px' : '18px')};
    }
  }
`
export const UserContainer = styled.div`
  border-top: 0.12px solid rgba(0, 0, 0, 0.1);
  padding: ${(props => props.isonlyicons ? '10px 0 0 0' : '10px 15px 0 15px')};
  display: flex;
  justify-content: ${(props => props.isonlyicons ? 'center' : 'space-between')};
  align-items: center;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  svg {
    display: ${(props => props.isonlyicons ? 'none' : 'inline-flex')};
    transform: rotate(180deg);
  }

  > div {
  
    > * {
      margin: 0;
      display: ${(props => props.isonlyicons ? 'none' : 'block')};
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

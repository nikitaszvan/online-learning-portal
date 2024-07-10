import styled from 'styled-components';

export const SideNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  min-width: 205px;
  ${(props => props.isonlyicons ? 'width: 5%; min-width:unset' : 'width: 14%')};
  ${(props => props.isonlyicons ? 'min-width: 70px' : 'min-width: 180px; max-width: 265px')};
  transition: width 0.3s ease;
  padding-top: 1rem;
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
    height: 2.5rem;
    margin: 0.5rem 1rem;
    padding: 0;
    padding-right: 1rem;
    display: flex;
    ${(props => props.isonlyicons ? 'justify-content: center; padding-right: 0;' : '')};

    > .ps-menu-icon {
      margin: 0;

      > svg {
        font-size: ${(props => props.isonlyicons ? '1.8rem' : '1.4rem')};
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
    display ${(props => props.isonlyicons ? 'none' : 'inline-flex')};
  }

  span.ps-menu-icon {
    ${(props => props.isonlyicons && 'justify-self: center;')};
  }

  span.ps-submenu-expand-icon {
    margin-left: auto;
    ${(props => props.isonlyicons ? 'display: none; width: 0;' : 'display: inline-flex;')};
  }

  .css-1tqrhto > a {

    &:hover {
      background-color: var(--color-secondary);
      color: var(--color-on-primary);

    }
    padding-left: 2.2rem;
    }
  }

  .skeleton-side-nav-container {
    display: flex;
    gap: 2rem;
    width: 100%;
    justify-content: center;
    align-items: center;

    > * {
      margin-block: 0.68rem;
    }
    
    > div:nth-child(1) {
      width: 10%;
      aspect-ratio: 1/1;
    } 

    > div:nth-child(2) {
      width: 45%;
      height: 1.5rem;
      position: relative;
      right: 4%;
    } 

    > div:nth-child(3) {
      width: 10%;
      height: 1.5rem;
    } 
  }
`;

export const BottomSideBarContainer = styled.div`
  margin-top: auto;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props => props.isonlyicons && 'align-items: center' )};
  padding-block: 0.7rem;

  a {
    display: flex;
    margin-left: ${(props => props.isonlyicons ? '0' : '0.7rem')};
    align-items: center;

    p {
      margin: 0;
      display: ${(props => props.isonlyicons ? 'none' : 'flex')};
    }

    svg {
      margin: 0 8.5px;
      font-size: ${(props => props.isonlyicons ? '1.8rem' : '1.4rem')};
    }
  }
`
export const UserContainer = styled.div`
  border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
  padding: ${(props => props.isonlyicons ? '0.5rem 0 0 0' : '0.5rem 1rem 0 1rem')};
  display: flex;
  justify-content: ${(props => props.isonlyicons ? 'center' : 'space-between')};
  align-items: center;

  img {
    height: 40px;
    aspect-ratio: 1/1;
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
      font-size: 1rem;
      font-weight: 600;
    }

    > p {
      font-size: 0.8rem;
    }
  }
`

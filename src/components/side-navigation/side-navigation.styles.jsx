import { Sidebar, SubMenu } from 'react-pro-sidebar';
import styled from 'styled-components';
import { ReactComponent as CollapseSideDiv } from '../../assets/svgs/collapse-side.svg';

export const SideNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  min-width: 205px;
  ${(props => props.isonlyicons ? 'width: 5%; min-width:unset' : 'width: 14%')};
  ${(props => props.isonlyicons ? 'min-width: 70px' : 'min-width: 200px; max-width: 225px')};
  transition: width 0.3s ease;
  padding-top: 1rem;
  background-color: white;


  @media (max-width: 667px) {
    position: fixed;
    top: 5rem;
    right: 0;
    z-index: 1000;
    width: 40%;
    max-width: 265px;
    display: ${(props => props.showMobileMenu ? 'block' : 'none')};

    @media (max-width: 414px) {
      top: 10vw;
    }
  }


  li.ps-menuitem-root {
    width: 100%;
  }
  
  .css-dip3t8 {
    background-color: var(--color-primary);
  }

  aside.css-1wvake5 {
    width: 100%;
    min-width: unset;
  }

  a.ps-open {
    background-color: var(--color-primary-var);
  }

  a.ps-menu-button {
    border-radius: 8px;
    height: 2.5rem;
    margin: 0.5rem 0.5rem;
    padding: 2rem 0.5rem;
    padding-right: 1.5rem;
    display: flex;
    ${(props => props.isonlyicons ? 'justify-content: center; padding-inline: 0;' : '')};


    > .ps-menu-icon {
      margin: 0;

      > svg {
        font-size: ${(props => props.isonlyicons ? '2.5rem' : '2.2rem')};
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
    font-size: 1.2rem;
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

export const SidebarStyled = styled(Sidebar)`
${(props => (!props.isonlyicons && !props.ismobilesize) && 'padding-top: 0.5rem;')}
  ${(props => !props.isonlyicons && 'border: none !important; border-top: 1px solid #eaebed !important;')}
`

export const SubMenuStyled = styled(SubMenu)`
  padding-inline: 1rem;
`

export const MobileSearchBar = styled.div`
  width: 80%;
  height: 2.5rem;
  border: 0.15rem solid #D9D9D9;
  border-radius: 8px;
  align-items: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
`

export const BottomSideBarContainer = styled.div`
  margin-top: auto;
  min-height: ${(props => props.ismobilesize ? 'unset' : '110px')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props => props.isonlyicons && 'align-items: center' )};
  padding-block: 0.7rem;
`

export const TopSectionDiv = styled.div`

  display: flex;
  gap: 1.6rem;
  background-color: #f2f2f2;
  align-self: center;
  padding: 1rem;
  border-radius: 8px;
  ${(props => !props.isonlyicons ? 'width: calc(100% - 3rem); padding-right: 0.8rem;' : 'cursor: pointer;')}

  margin-block: 1.4rem 2rem;

  > button:nth-of-type(1) {
    background-color: #A61C38;
    width: fit-content;
    height: fit-content;
    padding: 0.5rem;
    border-radius: 6px;
    border: none;

    > svg {
      font-size: 2rem;
      color: white;
    }
  }

  > div:nth-of-type(1) {

    > * {
      margin: 0;
      position: relative;
      top: 0.2rem;
    }

    > h3 {
      font-size: 1.2rem;
    }

    > p {

    }
  } 

    > button:nth-of-type(2) {
      background-color: transparent;
      border: none;
      margin-left: auto;
    }
`

export const CollapseDivIcon = styled(CollapseSideDiv)`
  width: 2.5rem;
  aspect-ratio: 1/1;
`

export const UserContainer = styled.div`
  border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
  padding: ${(props => props.isonlyicons ? '0.5rem 0 0 0' : '2rem 1rem 1rem 1rem')};
  margin-top: 1rem;
  display: flex;
  justify-content: ${(props => props.isonlyicons ? 'center' : 'space-between')};
  align-items: center;
  align-self: none;

  img {
    height: 40px;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }

  > button {
    border: none;
    background-color: transparent;
    > svg {
      font-size: 2rem;
      display: ${(props => props.isonlyicons ? 'none' : 'inline-flex')};
    }
  }

  > div {

    > * {
      margin: 0;
      display: ${(props => props.isonlyicons ? 'none' : 'block')};
    }

    > h3 {
      font-size: 1.2rem;
      font-weight: 600;
    }

    > p {
      font-size: 1rem;
    }
  }
`

export const SettingsContainer = styled.a`
    display: flex;
    align-items: center;
    gap: 0.7rem;

  ${(props => !props.isonlyicons && 'margin-left: 2rem')};
  > svg {
    font-size: ${(props => props.isonlyicons ? '2.5rem' : '2.2rem')};
    transition: font-size 0.3s ease;
  }

  > p {
    margin: 0;
    display: ${(props => props.isonlyicons ? 'none' : 'flex')};
    font-size: 1.2rem;
    font-weight: 500;
  }
`

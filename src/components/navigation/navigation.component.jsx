import { useContext } from 'react';
import { MyContext } from '../../contexts/contexts.component';
import { Outlet } from 'react-router-dom';
import SchoolLogo from '../../assets/school-logo.png';
import CompanyLogo from '../../assets/company-logo.png';
import DynamicIcon from '../dynamic-icon.component';

import {
  MobileMenuButton,
  NavigationContainer,
  NavHeaderRight,
  LogoContainer,
  SectionTitle,
  VerticalLine
} from './navigation.styles';
import SearchBarStyled from '../search-bar/search-bar.component';

const Navigation = ({ sectionTitle }) => {
  const { mobileMenuOpen, toggleMobileMenu } = useContext(MyContext);

  const onToggleClick = (prev) => {
    console.log('here');
    toggleMobileMenu(!prev);
  };


  return (
    <>
      <NavigationContainer>
        <LogoContainer onClick={() => {window.location.href = '/';}}>
          <img src={ SchoolLogo } alt='school logo'/>
          <VerticalLine />
          <img src={ CompanyLogo } alt='dev company logo'/>
        </LogoContainer>
        {sectionTitle && 
            <SectionTitle>{sectionTitle.toUpperCase()}</SectionTitle>
          }
        <NavHeaderRight>
          <SearchBarStyled />
        </NavHeaderRight>
        <MobileMenuButton id='mobile-menu-btn' onClick={() => onToggleClick(mobileMenuOpen)}>
          <DynamicIcon iconName='MenuOutlined'/>
        </MobileMenuButton>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;

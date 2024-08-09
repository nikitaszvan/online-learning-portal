import { useContext, useEffect } from 'react';
import { MyContext } from '../../contexts/contexts.component';
import { Outlet } from 'react-router-dom';
import SchoolLogo from '../../assets/school-logo.png';
import CompanyLogo from '../../assets/company-logo.png';
import DynamicIcon from '../dynamic-icon.component';

import {
  MobileMenuButton,
  NavigationContainer,
  NavHeaderRight,
  NavSearchBar,
  NavSearchIcon,
  LogoContainer,
  SectionTitle,
  VerticalLine
} from './navigation.styles';

const Navigation = ({ sectionTitle }) => {
  const { toggleMobileMenu } = useContext(MyContext);

  const onToggleClick = () => {
    toggleMobileMenu(prev => !prev);
  }

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
          <NavSearchIcon />
          <NavSearchBar/>
        </NavHeaderRight>
        <MobileMenuButton onClick={() => onToggleClick()}>
          <DynamicIcon iconName='MenuOutlined'/>
        </MobileMenuButton>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;

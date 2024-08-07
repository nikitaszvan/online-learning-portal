import { Fragment } from 'react';
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

  return (
    <Fragment>
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
        <MobileMenuButton>
          <DynamicIcon iconName='MenuOutlined'/>
        </MobileMenuButton>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

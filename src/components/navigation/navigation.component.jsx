import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import SchoolLogo from '../../assets/school-logo.png';
import CompanyLogo from '../../assets/company-logo.png'

import {
  NavigationContainer,
  NavHeaderRight,
  NavSearchBar,
  NavSearchIcon,
  LogoContainer,
  VerticalLine
} from './navigation.styles';

const Navigation = ({ sectionTitle }) => {


  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <img src={ SchoolLogo } alt='school logo'/>
          <VerticalLine />
          <img src={ CompanyLogo } alt='dev company logo'/>
        </LogoContainer>
        {sectionTitle && 
            <h3>{sectionTitle.toUpperCase()}</h3>
          }
        <NavHeaderRight>
          <NavSearchIcon />
          <NavSearchBar placeholder='Search...'/>
        </NavHeaderRight>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

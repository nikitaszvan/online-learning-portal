import { Fragment, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';
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

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

 

String.prototype.toTitleCase = function () {
  return this.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
/* https://react-bootstrap.github.io/docs/components/dropdowns */

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <img src={ SchoolLogo }/>
          <VerticalLine />
          <img src={ CompanyLogo }/>
        </LogoContainer>
        {sectionTitle && 
          <>
            <h3>{sectionTitle}</h3>
          </>}
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

import { Fragment, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGrip, faGear} from '@fortawesome/free-solid-svg-icons';
import { faMessage, faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import SchoolLogo from '../../assets/school-logo.png';
import CompanyLogo from '../../assets/company-logo.png'


import {
  NavigationContainer,
  NavHeaderRight,
  NavHeaderRightMiddleIcon,
  NavLinks,
  NavLink,
  LogoContainer,
  ProfileName,
  VerticalLine
} from './navigation.styles';

const Navigation = () => {
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
      <NavHeaderRight>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          <FontAwesomeIcon icon={faGrip} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/">Action</Dropdown.Item>
          <Dropdown.Item href="/">Another action</Dropdown.Item>
          <Dropdown.Item href="/">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <NavHeaderRightMiddleIcon>
        <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
        <FontAwesomeIcon icon={faMessage} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/">Action</Dropdown.Item>
          <Dropdown.Item href="/">Another action</Dropdown.Item>
          <Dropdown.Item href="/">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

        <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
        <FontAwesomeIcon icon={faBell} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/">Action</Dropdown.Item>
          <Dropdown.Item href="/">Another action</Dropdown.Item>
          <Dropdown.Item href="/">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </NavHeaderRightMiddleIcon>
        {isCartOpen && <CartDropdown />}
        <ProfileName>Hi, {currentUser ? currentUser.displayName.toTitleCase() : 'Nikita Van'}</ProfileName>
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faGear} />
        </NavHeaderRight>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

import { useState, useEffect, useRef, useContext, createRef } from 'react';
import { MyContext } from '../../contexts/contexts.component';
import { 
  BottomSideBarContainer,
  CollapseDivIcon,
  MobileSearchBar,
  SidebarStyled,
  SubMenuStyled,
  SideNavigationContainer,
  SettingsContainer,
  TopSectionDiv,
  UserContainer
} from './side-navigation.styles';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCoursesMap } from '../../store/courses/courses.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import Skeleton from '../skeleton-loader/skeleton-loader.component';
import { selectSideNavMenuMap } from '../../store/side-nav/side-nav.selector';
import DynamicIcon from '../dynamic-icon.component';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import SearchBarStyled from '../search-bar/search-bar.component';
import { signOutStart } from '../../store/user/user.action';
import { useNavigate } from 'react-router-dom';

const SideNavigationBar = ({mobileSize = false}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const { mobileMenuOpen, toggleMobileMenu } = useContext(MyContext);
  const coursesMap = useSelector(selectCoursesMap);
  const sideNavMenuMap = useSelector(selectSideNavMenuMap);
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverKey, setPopoverKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [classToAdd, setClass] = useState('expanded');
  const [openSubMenu, setKeySubMenu] = useState({currentOpen: null, prevOpen: null});
  const sideMenuOptionRefs = useRef({});
  const widthRef = useRef(window.innerWidth);
  const divRef = useRef(null);
  const [isSideNavCollapsed, setIsSideNavCollapsed] = useState(mobileSize ? false : () => window.innerWidth < 1281);

  useEffect(() => {
    if (Object.keys(sideNavMenuMap).length > 0) {
      setLoading(false);
    }
  }, [sideNavMenuMap]);

  // useEffect(() => {

  //   const handleClick = (event) => {
  //     if ((event.target.tagName === 'SPAN' && !event.target.parentNode.id) || !event.target.id){
  //       toggleMobileMenu(false);
  //       console.log('Mobile menu open state:', mobileMenuOpen);
  //     }
  //   }

  //   const menuButtons1 = document.querySelectorAll('a.ps-menu-button');
  //   const menuButtons2 = document.querySelectorAll('span.ps-menu-label');

  //   const combinedMenuButtons = [...menuButtons1, ...menuButtons2];

  //   combinedMenuButtons.forEach(button => {
  //     button.addEventListener('click', handleClick);
  //   });


  //   return () => {
  //     combinedMenuButtons.forEach(button => {
  //       button.removeEventListener('click', handleClick);
  //     });

  //   };
  // }, []);
  
  const handleSignOutUser = async () => {
    try {
      toggleMobileMenu(false);
      dispatch(signOutStart());
      navigate('/auth');
    } catch (error) {
      console.log('user sign out failed', error);
    }
  };

  const handleClickOutside = (event) => {

    if (
      divRef.current && !divRef.current.contains(event.target) &&
      !event.target.closest('#mobile-menu-btn')
    ) {
      toggleMobileMenu(false);
    }
  };

  const handleMobileMenuClick = () => {
    setKeySubMenu({currentOpen: null, prevOpen: null})
    const elements = document.querySelectorAll('a.ps-menu-button.ps-open');
    elements.forEach(element => {
      element.click();
    });
    toggleMobileMenu(false)

  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    useEffect(() => {
      const handleResize = () => {
        widthRef.current = window.innerWidth;
      };

      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  const renderPlaceholders = (state) => {
    if (state) {
      return Array.from({ length: 6 }).map((_, index) => (
        <div className="skeleton-side-nav-container-collapsed" key={`skeleton-${index}`}>
          <Skeleton />
        </div>
      ));
    }
    else {
      return Array.from({ length: 6 }).map((_, index) => (
        <div className="skeleton-side-nav-container" key={`skeleton-${index}`}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ));
    }
  };


  const triggerClick = (key, delay = 0) => {
    setTimeout(() => {
      const element = document.getElementById(`submenu-${key}`);
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
      element.dispatchEvent(event);
    }, delay);
  }

  const handleOnClick = (e, key) => {
    if (e.isTrusted) {
      if (key && !openSubMenu.currentOpen && !openSubMenu.prevOpen) {
        setKeySubMenu(prevState => { 
          return ({
          prevOpen: prevState.prevOpen,
          currentOpen: key
          });
        });
        if (isSideNavCollapsed) {
          triggerClick(key, 100);
          setIsSideNavCollapsed(false);
          setClass('expanded');
        }
      }
    
      else if (openSubMenu.currentOpen == key && ((typeof key) == 'string')){
        setKeySubMenu({
          prevOpen: null,
          currentOpen: null,
        });
      }

      else if (key && (!isSideNavCollapsed) && openSubMenu.prevOpen == null) {
        triggerClick(openSubMenu.currentOpen);
        setKeySubMenu(prevState => { 
          return {
          prevOpen: prevState.currentOpen,
          currentOpen: key
        }});
      }

      else if (key && !isSideNavCollapsed && openSubMenu.prevOpen !== null) {
        triggerClick(openSubMenu.currentOpen);
        setKeySubMenu(prevState => { return {
          prevOpen: prevState.currentOpen,
          currentOpen: key
        }});
      }

    } 
  setPopoverKey(null);
    };

  const collapseSideNav = () => {
    setIsSideNavCollapsed(true);
    setKeySubMenu({currentOpen: null, prevOpen: null})
    const elements = document.querySelectorAll('a.ps-menu-button.ps-open');
    elements.forEach(element => {
      element.click();
    });
    setClass('collapsed');
  }

  const expandSideNav = (e) => {
    setIsSideNavCollapsed(false);
    setClass('expanded');
  }


  const handlePopoverOpen = (event, key) => {
    setAnchorEl(event.currentTarget);
    setPopoverKey(key);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverKey(null);
  };

  return (
    <SideNavigationContainer isonlyicons={ mobileSize ? false : isSideNavCollapsed } ismobilesize={ mobileSize } className={ classToAdd } showMobileMenu={mobileMenuOpen} ref={divRef}>
      {!mobileSize ? <TopSectionDiv isonlyicons={ mobileSize ? false : isSideNavCollapsed }>
        <button onClick={(e) => isSideNavCollapsed && expandSideNav(e)}>
          <DynamicIcon iconName='School'/>
        </button>
        { !isSideNavCollapsed && <>
        <div>
          <h3>Workspace</h3>
          <p>Fall 2024</p>
        </div>
        <button onClick={collapseSideNav}>
          <CollapseDivIcon />
        </button>
        </>}
      </TopSectionDiv> : <MobileSearchBar><SearchBarStyled /></MobileSearchBar>}
      <SidebarStyled style={{ overflowY: 'hidden'}} isonlyicons={ isSideNavCollapsed } ismobilesize={ mobileSize }>
        <Menu>
          {loading ? renderPlaceholders(isSideNavCollapsed) :
            Object.entries(sideNavMenuMap)?.map(([key, sideNavSubMenu]) => {
              if (!sideMenuOptionRefs.current[key]) {
                sideMenuOptionRefs.current[key] = createRef();
              }

              const { menuIcon, menuTitle, subMenuOptions } = sideNavSubMenu;
              return (
                <>
                  { isSideNavCollapsed ?
                    <>
                      <Typography
                        key={`typography-${key}`}
                        aria-owns={popoverKey === key ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={(event) => handlePopoverOpen(event, key)}
                        onMouseLeave={handlePopoverClose}
                      >
                        <SubMenuStyled
                          key={`submenu-${key}`}
                          ref={sideMenuOptionRefs.current[key]}
                          icon={<DynamicIcon iconName={menuIcon} />}
                          label={menuTitle}
                          onClick={(e) => handleOnClick(e, key)}
                        >
                          {subMenuOptions !== 'mapCourses' ?
                            Object.entries(subMenuOptions).map(([subKey, subMenuOption]) => {
                              const { label, redirect_path } = subMenuOption;
                              return (<MenuItem key={`submenu-item-${subKey}`} component={<Link to={'/' + redirect_path} />} onClick={() => handleMobileMenuClick()}>{label}</MenuItem>);
                            }) : Object.entries(coursesMap)?.map(([courseKey, course]) => {
                              const { courseCode, courseSlug } = course;
                              return <MenuItem key={`course-item-${courseKey}`} component={<Link to={'course/' + courseSlug} />} onClick={() => handleMobileMenuClick()}>{courseCode}</MenuItem>;
                            })
                          }
                        </SubMenuStyled>
                      </Typography>
                      <Popover
                        key={`popover-${key}`}
                        id="mouse-over-popover"
                        sx={{ pointerEvents: 'none' }}
                        open={popoverKey === key}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                      >
                        <Typography key={`popover-typography-${key}`} sx={{ p: 1 }}>{menuTitle}</Typography>
                      </Popover>
                    </> :

                    <>
                      <SubMenuStyled
                        key={`submenu-${key}`}
                        id={`submenu-${key}`}
                        ref={sideMenuOptionRefs.current[key]}
                        icon={<DynamicIcon iconName={menuIcon} />}
                        label={menuTitle}
                        onClick={(e) => handleOnClick(e, key)}
                      >
                        {subMenuOptions !== 'mapCourses' ?
                          Object.entries(subMenuOptions).map(([subKey, subMenuOption]) => {
                            const { label, redirect_path } = subMenuOption;
                            return (<MenuItem key={`submenu-item-${subKey}`} component={<Link to={'/' + redirect_path} />} onClick={() => handleMobileMenuClick()}>{label}</MenuItem>);
                          }) : Object.entries(coursesMap)?.map(([courseKey, course]) => {
                            const { courseCode, courseSlug } = course;
                            return <MenuItem key={`course-item-${courseKey}`} component={<Link to={'/course/' + courseSlug} />} onClick={() => handleMobileMenuClick()}>{courseCode}</MenuItem>;
                          })
                        }
                      </SubMenuStyled>
                    </>
                  }
                </>
              );
            })
          }
        </Menu>
      </SidebarStyled>
      <BottomSideBarContainer isonlyicons={isSideNavCollapsed} ismobilesize={ mobileSize }>
        <SettingsContainer href="/" isonlyicons={isSideNavCollapsed}>
        {!mobileSize && 
          <>
            <DynamicIcon iconName='SettingsOutlined' />
            <p>Settings</p>
          </>
          }
        </SettingsContainer>
        <UserContainer isonlyicons={isSideNavCollapsed} >
            <img onClick={(e) => isSideNavCollapsed && expandSideNav(e)} src={currentUser.photoURL ? currentUser.photoURL : require('../../assets/studentprofilepic.jpeg')} alt="student profile" />
          <div>
            <h3>{currentUser.displayName}</h3>
            { mobileSize ? 
            <button onClick={() => handleSignOutUser()}>Logout</button> :
            <p>{currentUser.email}</p>
            }
          </div>
          <button onClick={() => mobileSize? null : handleSignOutUser() }>{mobileSize ? <DynamicIcon iconName='SettingsOutlined' /> : <DynamicIcon iconName='Logout' /> }</button>
        </UserContainer>
      </BottomSideBarContainer>
    </SideNavigationContainer>
  );
};

  
  export default SideNavigationBar;
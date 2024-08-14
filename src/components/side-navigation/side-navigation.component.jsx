import { useState, useEffect, useRef, useContext, createRef } from 'react';
import { MyContext } from '../../contexts/contexts.component';
import { 
  BottomSideBarContainer,
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
import { useSelector } from 'react-redux';
import { selectCoursesMap } from '../../store/courses/courses.selector';
import Skeleton from '../skeleton-loader/skeleton-loader.component';
import { selectSideNavMenuMap } from '../../store/side-nav/side-nav.selector';
import DynamicIcon from '../dynamic-icon.component';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import SearchBarStyled from '../search-bar/search-bar.component';

const SideNavigationBar = ({mobileSize = false}) => {
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

  const handleClickOutside = (event) => {
    if (
      divRef.current && !divRef.current.contains(event.target) &&
      !event.target.closest('#mobile-menu-btn')
    ) {
      toggleMobileMenu(false);
    }
  };


console.log(mobileMenuOpen);
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

  const renderPlaceholders = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <div className="skeleton-side-nav-container" key={`skeleton-${index}`}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    ));
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

      else if (key && !isSideNavCollapsed && openSubMenu.prevOpen == null) {
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
    console.log(e)
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
    <SideNavigationContainer isonlyicons={ mobileSize ? false : isSideNavCollapsed } className={ classToAdd } showMobileMenu={mobileMenuOpen} ref={divRef}>
      {!mobileSize ? <TopSectionDiv isonlyicons={ mobileSize ? false : isSideNavCollapsed }>
        <button onClick={(e) => isSideNavCollapsed && expandSideNav(e)}>
          <DynamicIcon iconName='School'/>
        </button>
        { !isSideNavCollapsed && <>
        <div>
          <h3>Workspace</h3>
          <p>Fall 2024</p>
        </div>
        <Typography
          key={'collapse-btn'}
          aria-owns={popoverKey === 0 ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={(event) => handlePopoverOpen(event, 0)}
          onMouseLeave={handlePopoverClose}
        >
        <button onClick={collapseSideNav}>
          <DynamicIcon iconName='CloseFullscreen'/>
        </button>
        </Typography>
        <Popover
          key={`popover-collapse-btn`}
          id="mouse-over-popover"
          sx={{ pointerEvents: 'none' }}
          open={popoverKey === 0}
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
          <Typography key={`popover-typography-collapse-btn`} sx={{ p: 1 }}>Collapse</Typography>
        </Popover>
        </>}
      </TopSectionDiv> : <MobileSearchBar><SearchBarStyled /></MobileSearchBar>}
      <SidebarStyled style={{ overflowY: 'hidden'}} isonlyicons={ isSideNavCollapsed } ismobilesize={ mobileSize }>
        <Menu>
          {loading ? renderPlaceholders() :
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
                          onClick={(e) => !mobileSize && handleOnClick(e, key)}
                        >
                          {subMenuOptions !== 'mapCourses' ?
                            Object.entries(subMenuOptions).map(([subKey, subMenuOption]) => {
                              const { label, redirect_path } = subMenuOption;
                              return (<MenuItem key={`submenu-item-${subKey}`} component={<Link to={'/' + redirect_path} />}>{label}</MenuItem>);
                            }) : Object.entries(coursesMap)?.map(([courseKey, course]) => {
                              const { courseCode, courseSlug } = course;
                              return <MenuItem key={`course-item-${courseKey}`} to={courseSlug}>{courseCode}</MenuItem>;
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
                        onClick={(e) => !mobileSize && handleOnClick(e, key)}
                      >
                        {subMenuOptions !== 'mapCourses' ?
                          Object.entries(subMenuOptions).map(([subKey, subMenuOption]) => {
                            const { label, redirect_path } = subMenuOption;
                            return (<MenuItem key={`submenu-item-${subKey}`} component={<Link to={'/' + redirect_path} />}>{label}</MenuItem>);
                          }) : Object.entries(coursesMap)?.map(([courseKey, course]) => {
                            const { courseCode, courseSlug } = course;
                            return <MenuItem key={`course-item-${courseKey}`} to={courseSlug}>{courseCode}</MenuItem>;
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
          {!mobileSize &&
            <img src={require('../../assets/studentprofilepic.jpeg')} alt="student profile" />
          }
          <div>
            <h3>Nikita Van</h3>
            <p>nikitaszvan@mitmail.com</p>
          </div>
          {mobileSize ? <DynamicIcon iconName='SettingsOutlined' /> : <DynamicIcon iconName='Logout' /> }
        </UserContainer>
      </BottomSideBarContainer>
    </SideNavigationContainer>
  );
};

  
  export default SideNavigationBar;
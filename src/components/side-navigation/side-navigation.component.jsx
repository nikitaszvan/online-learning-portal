import { Fragment, useState, useEffect, useRef, useCallback, createRef } from 'react';
import { 
  BottomSideBarContainer,
  SideNavigationContainer,
  SettingsContainer,
  UserContainer
} from './side-navigation.styles';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCoursesMap } from '../../store/courses/courses.selector';
import Skeleton from '../skeleton-loader/skeleton-loader.component';
import { selectSideNavMenuMap } from '../../store/side-nav/side-nav.selector';
import DynamicIcon from '../dynamic-icon.component';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const SideNavigationBar = () => {

  const coursesMap = useSelector(selectCoursesMap);
  const sideNavMenuMap = useSelector(selectSideNavMenuMap);
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverKey, setPopoverKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [classToAdd, setClass] = useState('expanded');
  const sideMenuOptionRefs = useRef({});
  const [openMenus, setOpenMenus] = useState({});
  const widthRef = useRef(window.innerWidth);
  const [isSideNavCollapsed, setIsSideNavCollapsed] = useState(() => window.innerWidth < 1281);

  useEffect(() => {
    if (Object.keys(sideNavMenuMap).length > 0) {
      setLoading(false);
    }
  }, [sideNavMenuMap]);


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

  const handleOnClick = (e) => {
    if (!isSideNavCollapsed) {
      const elements = document.querySelectorAll('a.ps-menu-button.ps-open');
      elements.forEach(element => {
        element.click();
      });
      setClass('collapsed');
    } else {
      setClass('expanded');
      
    }
    setIsSideNavCollapsed(prev => !prev);
    setPopoverKey(null);
  };

  const handlePopoverOpen = (event, key) => {
    setAnchorEl(event.currentTarget);
    setPopoverKey(key);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverKey(null);
  };


  return (
    <SideNavigationContainer isonlyicons={isSideNavCollapsed} className={classToAdd}>
      <Sidebar style={{ overflowY: 'hidden'}}>
        <Menu>
          {loading ? renderPlaceholders() :
            Object.entries(sideNavMenuMap)?.map(([key, sideNavSubMenu]) => {
              if (!sideMenuOptionRefs.current[key]) {
                sideMenuOptionRefs.current[key] = createRef();
              }

              const { menuIcon, menuTitle, subMenuOptions } = sideNavSubMenu;

              return (
                <Fragment key={`menu-${key}`}>
                  {isSideNavCollapsed ?
                    <Fragment>
                      <Typography
                        key={`typography-${key}`}
                        aria-owns={popoverKey === key ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={(event) => handlePopoverOpen(event, key)}
                        onMouseLeave={handlePopoverClose}
                      >
                        <SubMenu
                          key={`submenu-${key}`}
                          ref={sideMenuOptionRefs.current[key]}
                          icon={<DynamicIcon iconName={menuIcon} />}
                          label={menuTitle}
                          onClick={(e) => isSideNavCollapsed ? handleOnClick(e) : null}
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
                        </SubMenu>
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
                    </Fragment> :
                    <Fragment>
                      <SubMenu
                        key={`submenu-${key}`}
                        ref={sideMenuOptionRefs.current[key]}
                        icon={<DynamicIcon iconName={menuIcon} />}
                        label={menuTitle}
                        onClick={(e) => isSideNavCollapsed ? handleOnClick(e) : null}
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
                      </SubMenu>
                    </Fragment>
                  }
                </Fragment>
              );
            })
          }
        </Menu>
      </Sidebar>
      <BottomSideBarContainer isonlyicons={isSideNavCollapsed}>
        <SettingsContainer href="/" isonlyicons={isSideNavCollapsed}>
          <DynamicIcon iconName='SettingsOutlined' />
          <p>Settings</p>
        </SettingsContainer>
        <UserContainer isonlyicons={isSideNavCollapsed}>
          <img src={require('../../assets/studentprofilepic.jpeg')} alt="student profile" />
          <div>
            <h3>Nikita Van</h3>
            <p>nikitaszvan@mitmail.com</p>
          </div>
          <button onClick={handleOnClick} id='collapse-side-nav-button'><DynamicIcon iconName='ExitToAppOutlined' /></button>
        </UserContainer>
      </BottomSideBarContainer>
    </SideNavigationContainer>
  );
};

  
  export default SideNavigationBar;
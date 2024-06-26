import {  Fragment, useState } from 'react';
import { 
  BottomSideBarContainer,
  SideNavigationContainer,
  UserContainer
 } from './side-navigation.styles';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useSelector } from 'react-redux';
import {
  selectCoursesMap,
} from '../../store/courses/courses.selector';

import {
  selectSideNavMenuMap
} from '../../store/side-nav/side-nav.selector';
import DynamicIcon from '../dynamic-icon.component';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const SideNavigationBar = () => {
  const [isSideNavCollapsed, setIsSideNavCollapsed] = useState(false);
  const coursesMap = useSelector(selectCoursesMap);
  const sideNavMenuMap = useSelector(selectSideNavMenuMap);
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverKey, setPopoverKey] = useState(null);

  const handleOnClick = () => {
    if (!isSideNavCollapsed) {
      const elements = document.querySelectorAll('a.ps-menu-button.ps-open');
      elements.forEach(element => {
        element.click();
      });
    }
    setIsSideNavCollapsed(!isSideNavCollapsed);
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
    <SideNavigationContainer isonlyicons={isSideNavCollapsed}>
      <Sidebar style={{ overflowY: 'hidden' }}>
        <Menu>
          {
            Object.entries(sideNavMenuMap)?.map(([key, sideNavSubMenu]) => {
              const { menuIcon, menuTitle, subMenuOptions } = sideNavSubMenu;
              return (
                
                  isSideNavCollapsed ? 
                    <Fragment key={key}>
                      <Typography
                        aria-owns={popoverKey === key ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={(event) => handlePopoverOpen(event, key)}
                        onMouseLeave={handlePopoverClose}
                      >
                        <SubMenu 
                          icon={<DynamicIcon key={key} iconName={menuIcon} />} 
                          label={menuTitle} 
                          onClick={isSideNavCollapsed ? handleOnClick : null}
                        >
                          {subMenuOptions !== 'mapCourses' ?
                            Object.entries(subMenuOptions).map(([key, subMenuOption]) => (
                              <MenuItem to='/' key={key}>{subMenuOption}</MenuItem>
                            )) : Object.entries(coursesMap)?.map(([key, course]) => {
                              const { courseCode } = course;
                              return <MenuItem to='/' key={key}>{courseCode}</MenuItem>;
                            })
                          }
                        </SubMenu>
                      </Typography>
                      <Popover
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
                        <Typography sx={{ p: 1 }}>{menuTitle}</Typography>
                      </Popover> 
                    </Fragment> : 
                    <Fragment>
                      <SubMenu 
                      icon={<DynamicIcon key={key} iconName={menuIcon} />} 
                      label={menuTitle} 
                      onClick={isSideNavCollapsed ? handleOnClick : null}
                      >
                        {subMenuOptions !== 'mapCourses' ?
                          Object.entries(subMenuOptions).map(([key, subMenuOption]) => (
                            <MenuItem to='/' key={key}>{subMenuOption}</MenuItem>
                          )) : Object.entries(coursesMap)?.map(([key, course]) => {
                            const { courseCode } = course;
                            return <MenuItem to='/' key={key}>{courseCode}</MenuItem>;
                          })
                        }
                      </SubMenu>
                    </Fragment>
                
              );
            })
          }
        </Menu>
      </Sidebar>
      <BottomSideBarContainer isonlyicons={isSideNavCollapsed}>
        <a href="/">
          <DynamicIcon iconName='SettingsOutlined'/>
          <p>Settings</p>
        </a>
        <UserContainer isonlyicons={isSideNavCollapsed}>
          <img src={require('../../assets/studentprofilepic.jpeg')} alt="student profile" />
          <div>
            <h3>Nikita Van</h3>
            <p>nikitaszvan@mitmail.com</p>
          </div>
          <DynamicIcon iconName='ExitToAppOutlined' onclick={handleOnClick}/>
        </UserContainer>
      </BottomSideBarContainer>
    </SideNavigationContainer>
  );
};

  
  export default SideNavigationBar;
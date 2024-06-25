import {  useState } from 'react';
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

const SideNavigationBar = () => {
  const [ isSideNavCollapsed, setIsSideNavCollapsed ] = useState(false);
  const coursesMap = useSelector(selectCoursesMap);
  const sideNavMenuMap = useSelector(selectSideNavMenuMap);

  const handleOnClick = () => {
    {!isSideNavCollapsed && (() => {
      const elements = document.querySelectorAll('a.ps-menu-button.ps-open');
  
      elements.forEach(element => {
        element.click();
      });
    })()}
    setIsSideNavCollapsed(!isSideNavCollapsed);
    
  }

    return (
      <SideNavigationContainer isonlyicons={isSideNavCollapsed}>
        <Sidebar style={{overflowY: 'hidden'}} >
          <Menu>
        {
                Object.entries(sideNavMenuMap)?.map(([key, sideNavSubMenu]) => {
                  const { menuIcon, menuTitle, subMenuOptions } = sideNavSubMenu;
                  return (
                    <SubMenu icon={<DynamicIcon key={key} iconName={menuIcon} />} label={menuTitle} onClick={ isSideNavCollapsed ?  handleOnClick : null}>
                      {subMenuOptions !== 'mapCourses' ?
                      
                      Object.entries(subMenuOptions).map(([key, subMenuOption]) => {
                    return <MenuItem to='/' key={key}>{subMenuOption}</MenuItem>;
                  }) : Object.entries(coursesMap)?.map(([key, course]) => {
                    const { courseCode } = course;
                    return <MenuItem to='/' key={key}>{courseCode}</MenuItem>;
                  })}
                    </SubMenu>
                  )
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
      </BottomSideBarContainer >
      </SideNavigationContainer>
    );
  };
  
  export default SideNavigationBar;
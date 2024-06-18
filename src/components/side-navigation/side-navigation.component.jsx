
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
      
const coursesMap = useSelector(selectCoursesMap);
const sideNavMenuMap = useSelector(selectSideNavMenuMap);

console.log('side nav rendered')
    return (
      <SideNavigationContainer>
        <Sidebar>
          <Menu>
              <SubMenu label="Enrolled Courses">
              {Object.entries(coursesMap)?.map(([key, course]) => {
                  const { courseCode } = course;
                  return <MenuItem to='/' key={key}>{courseCode}</MenuItem>;
                })}
              </SubMenu>
        {
                Object.entries(sideNavMenuMap)?.map(([key, sideNavSubMenu]) => {
                  const { menuIcon, menuTitle, subMenuOptions } = sideNavSubMenu;
                  return (
                    <SubMenu icon={<DynamicIcon key={key} iconName={menuIcon}/>} label={menuTitle}>
                      {Object.entries(subMenuOptions).map(([key, subMenuOption]) => {
                    return <MenuItem to='/' key={key}>{subMenuOption}</MenuItem>;
                  })}
                    </SubMenu>
                  )
                })
              }
              </Menu>
            </Sidebar>
      <BottomSideBarContainer>
        <a href="/">
          <DynamicIcon iconName='SettingsOutlined'/>
          <p>Settings</p>
        </a>
        <UserContainer>
          <img src={require('../../assets/studentprofilepic.jpeg')} alt="student profile" />
          <div>
            <h3>Nikita Van</h3>
            <p>nikitaszvan@mitmail.com</p>
          </div>
          <DynamicIcon iconName='NotificationsNoneOutlined'/>
        </UserContainer>
      </BottomSideBarContainer>
      </SideNavigationContainer>
    );
  };
  
  export default SideNavigationBar;
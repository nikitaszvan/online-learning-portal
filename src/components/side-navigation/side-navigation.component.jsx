
import { SideNavigationContainer } from './side-navigation.styles';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useSelector } from 'react-redux';
import {
  selectCoursesMap,
  selectCoursesIsLoading,
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
          <Menu>
              <SubMenu label="Enrolled Courses">
              {Object.entries(coursesMap)?.map(([key, course]) => {
                  const { courseCode } = course;
                  return <MenuItem to='' key={key}>{courseCode}</MenuItem>;
                })}
              </SubMenu>
             
          
        {
                Object.entries(sideNavMenuMap)?.map(([key, sideNavSubMenu]) => {
                  const { menuIcon, menuTitle, subMenuOptions } = sideNavSubMenu;
                  return (
                    <SubMenu icon={<DynamicIcon key={key} iconName={menuIcon}/>} label={menuTitle}>
                      {Object.entries(subMenuOptions).map(([key, subMenuOption]) => {
                    return <MenuItem to='' key={key}>{subMenuOption}</MenuItem>;
                  })}
                    </SubMenu>
                  )
                })
              }
              </Menu>
      </SideNavigationContainer>
    );
  };
  
  export default SideNavigationBar;
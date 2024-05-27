
import { SideNavigationContainer } from './side-navigation.styles';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useSelector } from 'react-redux';
import {
  selectCoursesMap,
  selectCoursesIsLoading,
} from '../../store/courses/courses.selector';
const SideNavigationBar = () => {
const coursesMap = useSelector(selectCoursesMap);


console.log(coursesMap);
    return (
      <SideNavigationContainer>
        <Sidebar>
            <Menu>
                <SubMenu label="Enrolled Courses - Fall 2024">
                {Object.entries(coursesMap)?.map(([key, course]) => {
                    const { courseCode } = course;
                    return <MenuItem to='' key={key}>{courseCode}</MenuItem>;
                  })}
                </SubMenu>
            </Menu>
        </Sidebar>
      </SideNavigationContainer>
    );
  };
  
  export default SideNavigationBar;
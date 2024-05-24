
import { SideNavigationContainer } from './side-navigation.styles';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SideNavigationBar = () => {

    return (
      <SideNavigationContainer>
        <Sidebar>
            <Menu>
                <SubMenu label="Enrolled Courses - Fall 2024">
                    {courses.map((course) => (
                        <MenuItem key={course.id} to=''>{course.courseCode}</MenuItem>
                    ))}
                </SubMenu>
            </Menu>
        </Sidebar>
      </SideNavigationContainer>
    );
  };
  
  export default SideNavigationBar;
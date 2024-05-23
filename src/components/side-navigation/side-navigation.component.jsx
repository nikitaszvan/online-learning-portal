
import { SideNavigationContainer } from './side-navigation.styles';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SideNavigationBar = () => {

    const courses = [
        {
          id: 1,
          courseName: 'Discrete Mathematics I',
          imageUrl: '',
          courseCode: 'MTH 110',
        },
        {
            id: 2,
            courseName: 'Introduction to Multimedia Computation',
            imageUrl: '',
            courseCode: 'CPS 106',
        },
        {
            id: 3,
            courseName: 'Social Issues, Ethics and Professionalism',
            imageUrl: '',
            courseCode: 'CPS 412',
        },
        {
            id: 4,
            courseName: 'Calculus and Computational Methods I',
            imageUrl: '',
            courseCode: 'MTH 207',
        },
        {
            id: 5,
            courseName: 'Biology I',
            imageUrl: '',
            courseCode: 'BLG 143'
        },
      ];

    return (
      <SideNavigationContainer>
        <Sidebar>
            <Menu>
                <SubMenu label="Enrolled Courses - Fall 2024">
                    {courses.map((course) => (
                        <MenuItem key={course.id}>{course.courseCode}</MenuItem>
                    ))}
                </SubMenu>
            </Menu>
        </Sidebar>
      </SideNavigationContainer>
    );
  };
  
  export default SideNavigationBar;
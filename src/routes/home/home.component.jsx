import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCoursesStart } from '../../store/courses/courses.action';
import { HomeContainer } from './home.styles';
import Directory from '../../components/directory/directory.component';
import SideNavigationBar from '../../components/side-navigation/side-navigation.component';
import { useDispatch } from 'react-redux';
const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCoursesStart());
  }, []);
  return (
    <HomeContainer>
      <SideNavigationBar />
      <Directory />
      <Outlet />
    </HomeContainer>
  );
};

export default Home;

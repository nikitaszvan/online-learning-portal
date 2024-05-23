import { Outlet } from 'react-router-dom';
import { HomeContainer } from './home.styles';
import Directory from '../../components/directory/directory.component';
import SideNavigationBar from '../../components/side-navigation/side-navigation.component';

const Home = () => {
  return (
    <HomeContainer>
      <SideNavigationBar />
      <Directory />
      <Outlet />
    </HomeContainer>
  );
};

export default Home;

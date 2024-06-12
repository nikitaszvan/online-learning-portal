import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import { Layout } from './components/layout/layout.component';
import Directory from './components/directory/directory.component';
import Navigation from './components/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { CoursePage } from './routes/course-page/course-page.component';
import { checkUserSession } from './store/user/user.action';
import { fetchCoursesStart } from './store/courses/courses.action';
import {
  selectCoursesMap,
  selectCoursesIsLoading,
} from './store/courses/courses.selector';
import SideNavigationBar from './components/side-navigation/side-navigation.component';
const App = () => {
  const dispatch = useDispatch();
const coursesMap = useSelector(selectCoursesMap);
  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCoursesStart());
  }, []);

  return (
    <Routes>
        <Route path="/" element={<Layout children={<Directory />}/>} />
        {/* <Route index element={<Home />} /> */}
      {/* <Route path='/' element={<Navigation />}>
        
        <Route path='auth' element={<Authentication />} /> */}
        {Object.entries(coursesMap).map(([key, course]) => (
          <Route key={key} path={`course/${course.courseSlug}`} element={<Layout children={<CoursePage courseId={key} />} pageTitle={course.courseName}/>} />        
        ))}
    </Routes>
  );
};

export default App;

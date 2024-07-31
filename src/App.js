import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/layout.component';
import Directory from './components/directory/directory.component';
import QuizSummary from './routes/quiz-summary/quiz-summary.component';
import QuizPage from './components/quiz-page/quiz-page.component';
// import Home from './routes/home/home.component';
// import Navigation from './components/navigation/navigation.component';
// import Authentication from './routes/authentication/authentication.component';
// import Shop from './routes/shop/shop.component';
// import SideNavigationBar from './components/side-navigation/side-navigation.component';
// import Checkout from './routes/checkout/checkout.component';
import { CoursePage } from './routes/course-page/course-page.component';
import { checkUserSession } from './store/user/user.action';
import { fetchCoursesStart } from './store/courses/courses.action';
import { fetchSideNavMenuStart } from './store/side-nav/side-nav.action';
import { fetchTasksStart } from './store/tasks/tasks.action';
import {
  selectCoursesMap
} from './store/courses/courses.selector';


const App = () => {
  const dispatch = useDispatch();
const coursesMap = useSelector(selectCoursesMap);
  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCoursesStart());
    dispatch(fetchSideNavMenuStart());
    dispatch(fetchTasksStart());
  }, []);


  return (
    <>
      <Routes>
          <Route path="/" element={<Layout children={<Directory />} pageTitle='homepage'/>} />
          {/* <Route index element={<Home />} /> */}
        {/* <Route path='/' element={<Navigation />}>
          
          <Route path='auth' element={<Authentication />} /> */}
          {Object.entries(coursesMap).map(([key, course]) => (
            <Route key={key} path={`course/${course.courseSlug}`} element={<Layout children={<CoursePage courseId={key} />} pageTitle={course.courseName}/>} />        
          ))}
          <Route path='quiz-summary' element={<Layout children={<QuizSummary />} pageTitle='Quiz Summary'/>} />
          <Route path='quiz' element={<Layout children={<QuizPage />} pageTitle='Quiz Page'/>} />  
      </Routes>
    </>
  );
};

export default App;

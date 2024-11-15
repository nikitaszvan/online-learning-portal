import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/layout.component';
import Directory from './components/directory/directory.component';
import QuizSummary from './routes/quiz-summary/quiz-summary.component';
import QuizPage from './components/quiz-page/quiz-page.component';
import { CoursePage } from './routes/course-page/course-page.component';
import { checkUserSession } from './store/user/user.action';
import { fetchCoursesStart } from './store/courses/courses.action';
import { fetchSideNavMenuStart } from './store/side-nav/side-nav.action';
import { fetchTasksStart } from './store/tasks/tasks.action';
import { selectCoursesMap } from './store/courses/courses.selector';
import StyledBreadcrumb from './components/bootstrap-breadcrumb/bootstrap-breadcrumb.component';
import SignInPage from './routes/sign-in-page/sign-in-page.component';
import ProtectedRoute from './routes/protected-route/protected-route.component';

const App = () => {
  const dispatch = useDispatch();
  const coursesMap = useSelector(selectCoursesMap);
  const widthRef = useRef(window.innerWidth);

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCoursesStart());
    dispatch(fetchSideNavMenuStart());
    dispatch(fetchTasksStart());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      widthRef.current = window.innerWidth;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Layout children={<Directory isDirectory />} pageTitle="homepage" /></ProtectedRoute>} />
        <Route path="/auth/*" element={<SignInPage />} />
        {Object.entries(coursesMap).map(([key, course]) => {
          const { courseSlug, courseName } = course;
          
          return (
            <Route
              key={key}
              path={`course/${courseSlug}`}
              element={
                <Layout
                  children={
                    <>
                      {window.innerWidth > 809 && (
                        <StyledBreadcrumb
                          breadcrumbitems={[
                            { label: 'Home', href: '/' },
                            { label: 'Courses', href: '/' },
                            { label: courseName, href: `${courseSlug}` }
                          ]}
                        />
                      )}
                      <CoursePage courseId={key} />
                    </>
                  }
                  pageTitle={courseName}
                />
              }
            />
          );
        })}
        <Route
          path="/quiz-summary"
          element={
            <Layout
              children={
                <>
                  {window.innerWidth > 809 && (
                    <StyledBreadcrumb
                      breadcrumbitems={[
                        { label: 'Home', href: '/' },
                        { label: 'Quiz Summary', href: 'quiz-summary' }
                      ]}
                    />
                  )}
                  <QuizSummary />
                </>
              }
              pageTitle="Quiz Summary"
            />
          }
        />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </>
  );
};

export default App;

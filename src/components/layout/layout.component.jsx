import { useEffect, useState, Children } from 'react';
import Navigation from '../navigation/navigation.component';
import RightColumn from '../right-column/right-column.component';
import SideNavigationBar from '../side-navigation/side-navigation.component';
import { LayoutContainer, CenterDiv } from './layout.styles';

export const Layout = ({ children, pageTitle }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check for specific props or attributes in children
  const renderRightColumn = Children.map(children, child =>
    child.props.isDirectory ? <RightColumn /> : null
  );

  return (
    <LayoutContainer>
      <Navigation sectionTitle={pageTitle} />
      <div className="main-body">
        {windowWidth > 667 && <SideNavigationBar />}
        <CenterDiv>
          {children}
        </CenterDiv>
        {renderRightColumn}
        {windowWidth < 667 && <SideNavigationBar mobileSize={true} />}
      </div>
    </LayoutContainer>
  );
};
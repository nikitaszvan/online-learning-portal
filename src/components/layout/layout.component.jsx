import { useEffect, useState } from 'react'
import Navigation from '../navigation/navigation.component';
import RightColumn from '../right-column/right-column.component';
import SideNavigationBar from '../side-navigation/side-navigation.component';
import { LayoutContainer, CenterDiv } from './layout.styles';

export const Layout = ({ children, pageTitle }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <LayoutContainer>
            {!(children.type.name == 'QuizPage') &&
            <Navigation sectionTitle={ pageTitle }/> }
            <div className="main-body">
            {(!(children.type.name == 'QuizPage') && (windowWidth > 667)) &&
                <SideNavigationBar />}
                <CenterDiv>
                    { children }
                </CenterDiv>
                {(children.type.name == 'Directory') &&
                <RightColumn />}
                {(windowWidth < 667) && <SideNavigationBar mobileSize={true}/>}
            </div>
        </LayoutContainer>
    );
};

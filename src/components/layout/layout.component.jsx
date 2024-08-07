import { useEffect, useRef } from 'react'
import Navigation from '../navigation/navigation.component';
import RightColumn from '../right-column/right-column.component';
import SideNavigationBar from '../side-navigation/side-navigation.component';
import { LayoutContainer, CenterDiv } from './layout.styles';

export const Layout = ({ children, pageTitle }) => {
    const widthRef = useRef(window.innerWidth);
    
    useEffect(() => {
      const handleResize = () => {
        widthRef.current = window.innerWidth;
      };

      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    console.log(widthRef);


    return (
        <LayoutContainer>
            {!(children.type.name == 'QuizPage') &&
            <Navigation sectionTitle={ pageTitle }/> }
            <div className="main-body">
            {(!(children.type.name == 'QuizPage') && (widthRef.current > 667)) &&
                <SideNavigationBar />}
                <CenterDiv>
                    { children }
                </CenterDiv>
                {(children.type.name == 'Directory') &&
                <RightColumn />}
                {(widthRef.current < 667) && <SideNavigationBar />}
            </div>
        </LayoutContainer>
    );
};

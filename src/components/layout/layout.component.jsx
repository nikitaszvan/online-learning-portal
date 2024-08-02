import React from 'react'
import Navigation from '../navigation/navigation.component';
import RightColumn from '../right-column/right-column.component';
import SideNavigationBar from '../side-navigation/side-navigation.component';
import { LayoutContainer, CenterDiv } from './layout.styles';
import ResizableDiv from '../resizable-div/resizable-div.component';

export const Layout = ({ children, pageTitle }) => {
    return (
        <LayoutContainer>
            {!(children.type.name == 'QuizPage') &&
            <Navigation sectionTitle={ pageTitle }/> }
            <div className="main-body">
            {!(children.type.name == 'QuizPage') &&
                <SideNavigationBar />}
                <CenterDiv>
                    { children }
                </CenterDiv>
                {!(children.type.name == 'QuizPage' || children.type.name == 'QuizSummary') &&
                <RightColumn />}
            </div>
        </LayoutContainer>
    );
};

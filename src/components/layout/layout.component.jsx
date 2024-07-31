import React from 'react'
import Navigation from '../navigation/navigation.component';
import RightColumn from '../right-column/right-column.component';
import SideNavigationBar from '../side-navigation/side-navigation.component';
import { LayoutContainer } from './layout.styles';

export const Layout = ({ children, pageTitle }) => {
    return (
        <LayoutContainer>
            {!(children.type.name == 'QuizPage') &&
            <Navigation sectionTitle={ pageTitle }/> }
            <div className="main-body">
            {!(children.type.name == 'QuizPage') &&
                <SideNavigationBar />}
                { children }
                {!(children.type.name == 'QuizPage' || children.type.name == 'QuizSummary') &&
                <RightColumn />}
            </div>
        </LayoutContainer>
    );
};

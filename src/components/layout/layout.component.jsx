import React from 'react'
import Navigation from '../navigation/navigation.component';
import RightColumn from '../right-column/right-column.component';
import SideNavigationBar from '../side-navigation/side-navigation.component';
import { LayoutContainer } from './layout.styles';

export const Layout = ({ children, pageTitle }) => {
    return (
        <LayoutContainer>
            <Navigation sectionTitle={ pageTitle }/>
            <div className="main-page" style={{display: 'flex'}}>
                <SideNavigationBar />
                { children }
                <RightColumn />
            </div>
        </LayoutContainer>
    );
};

import React from 'react'
import Navigation from '../navigation/navigation.component';
import SideNavigationBar from '../side-navigation/side-navigation.component';

export const Layout = ({ children, pageTitle }) => {
    return (
        <>
        <Navigation sectionTitle={ pageTitle }/>
        <div className="main-page" style={{display: 'flex'}}>
            <SideNavigationBar />
            { children }
        </div>
        </>
    );
};
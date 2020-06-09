import React from 'react';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection';
import AboutSection from '../AboutSection/AboutSection';

const Layout = () => {
    return (
        <div>
            <Navigation/>
            <HomeSection/>
            <AboutSection/>
        </div>
    );
}

export default Layout;
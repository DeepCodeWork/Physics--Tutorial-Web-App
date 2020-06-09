import React from 'react';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection';
import AboutSection from '../AboutSection/AboutSection';
import RegisterSection from '../RegisterSection/RegisterSection';

const Layout = () => {
    return (
        <div>
            <Navigation/>
            <HomeSection/>
            <RegisterSection/>
            <AboutSection/>
            
        </div>
    );
}

export default Layout;
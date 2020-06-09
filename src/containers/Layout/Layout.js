import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import HomeSection from '../../components/HomeSection/HomeSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import RegisterSection from '../../components/RegisterSection/RegisterSection';

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
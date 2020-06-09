import React from 'react';
import classes from './AboutSection.module.css';
import Features from './Features/Features';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import Introduction from './Introduction/Introduction';


const AboutSection = () => {
    return (
        <div className = {classes.aboutSection}>
            <div className="container">
                <SectionTitle title="About" color="white"/>
                <Features/>
                <Introduction/>
            </div>
        </div>

    );
}

export default AboutSection;
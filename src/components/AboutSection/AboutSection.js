import React from 'react';
import Features from './Features/Features';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';

const AboutSection = () => {
    return (
        <div>
            <div className="container">
                <SectionTitle title="About"/>
                <Features/>
            </div>
        </div>

    );
}

export default AboutSection;
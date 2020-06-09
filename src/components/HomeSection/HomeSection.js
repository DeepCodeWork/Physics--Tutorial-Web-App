import React from 'react';
import classes from './HomeSection.module.css';
import Image from '../../UI/Image/Image';
import waveImage from '../../assets/images/wave.jpg'

const HomeSection = () => {
    return (
        <div className = { classes.home +" pt-5"}>
            <div className="container">
                <div className="row">
                    <div className = "col-lg-6 d-lg-block">
                        <div className = { classes.quote }>
                            <p className="display-4">Physics is the most fundamental, and least significant, of the sciences.</p>
                            <p style={{color:"#0096ea"}}>Celebrating physics with the best minds</p>
                        </div>
                        <button className="py-2 px-3">Get Started</button>
                    </div>
                    <div className = "col-lg-6 d-none d-lg-block">
                        <div>
                            <Image src={waveImage} classes="img-fluid rounded" height={"auto"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSection;
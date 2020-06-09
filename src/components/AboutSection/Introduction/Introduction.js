import React from 'react';
import classes from './Introduction.module.css';

const Introduction = () => {
    return(
        <div className = {classes.intro}>
            <div className = "row">
                <div className = "col-lg-10 offset-lg-1">
                <p className="text-justify pt-5">
            We are a bootstrap startup with a vision to impact education and economics solving complex problems with simple solutions. 
            Edunomics combines tech expertise and business intelligence to catalyze change and deliver results. 
            We are employing top talent to provide a uniquely matching solution for your unique problem.
            </p>
                </div>
            </div>
        </div>
    );
}
export  default Introduction;
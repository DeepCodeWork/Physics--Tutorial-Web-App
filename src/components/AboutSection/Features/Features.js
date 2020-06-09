import React from 'react';
import Feature from './Feature/Feature';
import classes from './Features.module.css'

const Features = (props) => {

    return (
        <div className = {classes.features+" d-flex flex-row"}>
            <div className = "col-lg-3">
                <Feature icon = " mdi mdi-speedometer"
                    title = "Fast"
                    body = "Fast team connect and lag free interaction, our highest priority."></Feature>
            </div>
            <div className = "col-lg-3">
                <Feature icon = " mdi mdi-cellphone-link"
                    title = "Responsive"
                    body = "Our App will work on any device, big or small any size"></Feature>
            </div>
            <div className = "col-lg-3">
                <Feature icon = " mdi mdi-lightbulb"
                    title = "Intuitive"
                    body = "Strong preference for easy to use, ineractive creative ideas."></Feature>
            </div>
            <div className = "col-lg-3">    
                <Feature icon = " mdi mdi-rocket"
                title = "Dynamic"
                body = "Physics don't have to be static, I love making it come to life."></Feature>
            </div>
        </div>
    );
}

export default Features;
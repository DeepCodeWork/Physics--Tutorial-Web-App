import React from 'react';
import Aux from '../../hoc/Auxi';
import classes from './RegisterSection.module.css';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import {Link,Route} from 'react-router-dom';
import LoginSection from '../RegisterSection/LoginSection/LoginSection';
import SignupSection from '../RegisterSection/SignupSection/SignupSection';

const RegisterSection  = () => {
    return (
        <Aux>
            <div className = { classes.registerSection }>
                <div className = "container">
                    <SectionTitle title="Register Yourself!"/>
                    <div className = "row pt-3">
                        <div className="col-lg-10 offset-lg-1">
                            <div className = "row">
                                
                            </div>
                           <div className={classes.loginSignupBox}>
                           <div className = "row">
                                <div className = {classes.sidepanel+" col-lg-7"}>
                                </div>
                                <div className = "col-lg-5">
                                <SignupSection/>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );
}

export default RegisterSection;
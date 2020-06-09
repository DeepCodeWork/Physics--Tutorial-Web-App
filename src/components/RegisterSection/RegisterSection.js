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
                        <div className="col-lg-8 offset-lg-2">
                            <div className = "row">
                                <div>
                                    <button>Login</button>
                                    <button>Signup</button>
                                </div>
                            </div>
                            <div className = "row">
                                <div className = "col-lg-6">
                                    
                                </div>
                                <div className = "col-lg-6">

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
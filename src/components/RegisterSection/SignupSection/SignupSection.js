import React from 'react';
import Aux from '../../../hoc/Auxi';
import classes from './SignupSection.module.css';

const SignupSection = () => {
    return (
        <Aux>
            <div>
            <div className={classes.panel+" card card-form text-center"}>
                <div class="card-body">
                            <div class="card-title"><h4>Sign Up Today</h4></div>
								<h6>Please fill out the form</h6>
								<div>
                                    <form action="">
                                        <div class="form-group">
                                            <input class="form-control form-control" type="text" placeholder="Username"/>
                                        </div>

                                        <div class="form-group">
                                            <input class="form-control form-control" type="email" name="" id="" placeholder="Email"/>
                                        </div>

                                        <div class="form-group">
                                            <input class="form-control form-control" type="password" name="" id="" placeholder="Password"/>
                                        </div>

                                        <div class="form-group">
                                            <input class="form-control form-control" type="password" name="" id="" placeholder="Confirm Password"/>
                                        </div>
                                    
                                        <div class="form-group">
                                            <button class="btn btn-outline-light btn-block">Submit!</button>
                                        </div>

                                        <div className="form-group">
                                            <a><button>Already a member? Login</button></a>
                                        </div>
                                    </form>
								</div>
                    </div>
            </div>
            </div>
        </Aux>
    );
}

export default SignupSection;
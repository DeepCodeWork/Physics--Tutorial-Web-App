import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../hoc/Auxi';

const Modal = (props) => {

    return (
        <Aux>
            <Background show = { props.login } clicked = { props.close }/>
            <div className = { classes.Modal }
                style = {{
                    transform : props.login ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity : props.login ? '1' : '0'
                }}>
                <div className = "row justify-content-right">
                </div>

                <hr></hr>

                <hr></hr>
                <div className="float-right">
                    <button className = "btn btn-danger mr-2" 
                    onClick = { props.close }>Close</button>
                    <button className = "btn btn-primary">Login</button>
                </div>
            </div>
        </Aux>
    );
}

export default Modal;
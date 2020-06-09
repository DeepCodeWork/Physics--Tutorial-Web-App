import React from 'react';
import BurgerImage from '../../assets/images/original.png';
import classes from './Logo.module.css';

const Logo = () => {
    return <div><img className={classes.logo} src = {BurgerImage} alt="main-logo"/></div>
}

export default Logo;
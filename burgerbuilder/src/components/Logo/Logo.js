import React from 'react';

import burgerImage from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerImage} alt="My Burger"/>
    </div>
);

export default logo;
import React from 'react'
import burgerLogo from '../../assets/images/logo.png'
import classes from './Logo.css';

/**
 * This functional component contains the logic for the logo 
 * that is displayed in the navigation pane
 * @param {height} props the height of the logo  
 */
const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger" style={{height: props.height}}/>
    </div>
);

export default Logo;
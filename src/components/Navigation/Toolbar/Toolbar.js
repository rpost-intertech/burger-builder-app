import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

/**
 * This functional component contains the content for the toolbar
 * that is displayed
 * @param {open} props represents whether the toolbar should be opened
 */
const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div onClick={props.open} className={classes.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <Logo height="70%"/>
        <nav className={classes.DesktopOnly}>
            <NavItems/>
        </nav>
    </header>
);

export default Toolbar;
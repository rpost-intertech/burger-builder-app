import React from 'react';
import classes from './NavItem.css';

/**
 * This functional component represents a single navigation
 * item on the navigation pane
 * @param {active, link} props includes information on the link
 * reference and the class name of the anchor tag
 */
const NavItem = (props) => (
    <li className={classes.NavItem}>
        <a 
            href={props.link} 
            className={props.active ? classes.active : null}>
                {props.children}</a>
    </li>
);

export default NavItem;
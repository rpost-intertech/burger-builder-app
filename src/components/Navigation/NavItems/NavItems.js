import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.css'

/**
 * This functional component structures the contents of the
 * navigation headers for both desktop and mobile versions.
 */
const NavItems = () => (
    <ul className={classes.NavItems}>
      <NavItem link="/" active>Burger Builder</NavItem>
      <NavItem link="/">Checkout</NavItem>
    </ul>
);

export default NavItems;
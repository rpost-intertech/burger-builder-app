import React from 'react';
import classes from './Backdrop.css';

/**
 * This functional component creates a backdrop to whatever is currently
 * being displayed, creating a 'shade' on the objects behind the current
 * viewing screen
 * @param {clicked} props a property to determine if the backdrop should be
 * displayed 
 */
const Backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default Backdrop;
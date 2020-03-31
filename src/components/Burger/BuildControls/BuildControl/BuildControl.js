import React from 'react';
import classes from './BuildControl.css';

/**
 * This functional component represents a single ingredient to be
 * added or removed to the burger as displayed in the section below
 * the visual preview of the burger
 * @param {label, remove, add, disabled} props includes information on
 * what the ingredient is for the label, actions on whether to remove or
 * add the particular ingredient based on certain button clicked, and if the
 * button should be disabled (particularly to prevent removing an ingredient 
 * that doesn't exist on the burger)
 */
const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.remove} disabled={props.disabled}>-</button>
        <button className={classes.More} onClick={props.add}>+</button>
    </div>
);

export default BuildControl;
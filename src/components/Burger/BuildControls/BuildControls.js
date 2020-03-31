import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Patty', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Onion', type: 'onion'}
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
       {controls.map(ctrl => {
           return <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    add={() => props.ingredientAdded(ctrl.type)}
                    remove={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}/>
       })}  
       <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}>SUBMIT ORDER</button> 
    </div>
);

export default BuildControls;
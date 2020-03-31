import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop';

/**
 * This functional component represents a container for which the order 
 * summary/checkout page of the application that is displayed when the 
 * 'Order Now' button is clicked
 * @param {modelClosed, show} props a boolean representing whether the backdrop
 * should be displayed 
 */
const Modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default Modal;
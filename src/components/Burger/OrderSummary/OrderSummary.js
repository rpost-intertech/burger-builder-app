import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
        return <li key={igKey}>
                 <span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span>
               </li>
        });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> <strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.orderCancelled} btnType="Cancel">CANCEL</Button>
            <Button clicked={props.orderContinue} btnType="Yes">CONTINUE</Button>
        </Aux>
    );
}

export default OrderSummary;
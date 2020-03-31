import React from 'react';
import classes from './BurgerIngredient.css'

const BurgerIngredient = (props) => {
    let ingredient = null;
    switch(props.type){
        case('bottom-bun'):
            ingredient = <div className={classes.BunBottom}></div>
            break;
        case('top-bun'):
            ingredient = (
                <div className={classes.BunTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case('meat'):
            ingredient = <div className={classes.Meat}></div> 
            break;
        case('cheese'):
            ingredient = <div className={classes.Cheese}></div> 
            break;
        case('salad'):
            ingredient = <div className={classes.Salad}></div> 
            break;
        case('bacon'):
            ingredient = <div className={classes.Bacon}></div> 
            break;
        case('onion'):
            ingredient = <div className={classes.Onion}></div> 
            break;
        default:
            ingredient = null;
    }
    return ingredient;
} 


export default BurgerIngredient;
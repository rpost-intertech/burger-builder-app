import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

/**
 * This functional component represents the visual preview of the burger
 * that is being constructed
 * @param {ingredients} props includes the ingredients that are being
 * added to or removed from the burger 
 */
const Burger = (props) => {
    //transform ingredients to an array
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey}/>
                });
            }).reduce((arr, el) => {
                return arr.concat(el);
            }, []);
 
    if(transformedIngredients.length === 0){
      transformedIngredients = <p>Please start adding ingredients!</p> 
    }
    console.log(transformedIngredients);
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="top-bun" />
             {transformedIngredients}
            <BurgerIngredient type="bottom-bun" />
        </div>
    )
}

export default Burger;
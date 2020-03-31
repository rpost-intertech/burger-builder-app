import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: .5,
    meat: 1.7,
    bacon: 1.2,
    onion: 0.6,
}

/**
 * This container class contains all 
 */
class BurgerBuilder extends Component{
    
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
            onion: 0,
        },
        totalPrice: 4,
        purchaseable: false,
        ordered: false
    }

    orderHandler = () => {
        this.setState({ordered: true});
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            },0);
        this.setState({purchaseable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] +1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] <= 0){
           return;
        }
        const updatedCount = this.state.ingredients[type] -1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    orderCancelHandler = () => {
        this.setState({ordered: false});
    }

    orderContinueHandler = () => {
        alert('You continue!');
    }
    
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
            console.log(disabledInfo[key])
        }
        return (
            <Aux>
                <Modal show={this.state.ordered} modalClosed={this.orderCancelHandler}>
                    <OrderSummary 
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    orderCancelled={this.orderCancelHandler}
                    orderContinue={this.orderContinueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    price={this.state.totalPrice}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchaseable}
                    ordered={this.orderHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;
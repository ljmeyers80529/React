import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auxillary from '../../hoc/Auxillary/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/BurgerSummary/BurgerSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index.js';
import axios from '../../axios-orders';

class BurgerBuilder extends Component {
    state = {
        purchasing: false
    };

    componentDidMount() {
        this.props.onInitIngredients();
    }

    updatePurchaeState (ingredients) {
        const sum =Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            }).reduce((sum, element) => {
                return sum + element
            }, 0);
        return sum > 0;
    }

    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({purchasing: true});
        } else {
            this.props.history.push('/auth');
        }
    }

    purchasedCanceledHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchased();
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;
        let  burger = this.props.error ?  <p>Ingredients can not be loaded!</p> :<Spinner />

        if (this.props.ings) {
            burger = (
                <Auxillary>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                      ingredientAdded = {this.props.onIngredientAdded}
                      ingredientRemoved = {this.props.onIngredientRemoved}
                      disabled = {disabledInfo}
                      purchasable = {this.updatePurchaeState(this.props.ings)}
                      ordered = {this.purchaseHandler}
                      isAuth = {this.props.isAuthenticated}
                      price = {this.props.price} />
                </Auxillary>
                );
                orderSummary =  <OrderSummary 
                ingredients = {this.props.ings} 
                price = {this.props.price}
                purchasedCanceled = {this.purchasedCanceledHandler}
                purchasedContinued = {this.purchaseContinueHandler}/>;
}
        

        return (
            <Auxillary>
                <Modal show={this.state.purchasing} modalClosed={this.purchasedCanceledHandler}>
                   {orderSummary}
                </Modal>
                {burger}
            </Auxillary>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (name) => dispatch(actions.addIngredient(name)),
        onIngredientRemoved: (name) => dispatch(actions.removeIngredient(name)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchased: () => dispatch(actions.purchaseInit())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
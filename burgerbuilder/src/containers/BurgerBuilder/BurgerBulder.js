import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auxillary from '../../hoc/Auxillary/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/BurgerSummary/BurgerSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        // axios.get('https://react-burgerbuilder-2d4fc.firebaseio.com/ingredients.json')
        // .then(response => {
        //     this.setState({ingredients: response.data})
        // })
        // .catch(error => {
        //     this.setState({error: true})
        // });
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

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = priceAddition + oldPrice;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }; 

    //     updatedIngredients[type] = updatedCount;
    //     this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    //     this.updatePurchaeState(updatedIngredients);
    // };

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];

    //     if (oldCount <= 0) {
    //         return;
    //     }
    //     const updatedCount = oldCount - 1;
    //     const priceReduction = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceReduction;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }; 

    //     updatedIngredients[type] = updatedCount;       this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    //     this.updatePurchaeState(updatedIngredients);
    // };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchasedCanceledHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        // alert('You pressed to continue.');
  
        // const queryParams = [];
        // for (let i in this.state.ingredients) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        // }
        // queryParams.push('price=' + this.state.totalPrice);

        // const queryString = queryParams.join('&');

        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: '?' + queryString
        // });

        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            // ...this.state.ingredients
            ...this.props.ings
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;
        let  burger = this.state.error ?  <p>Ingredients can not be loaded!</p> :<Spinner />

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
                      price = {this.props.price}/>
                </Auxillary>
                );
                orderSummary =  <OrderSummary 
                ingredients = {this.props.ings} 
                price = {this.props.price}
                purchasedCanceled = {this.purchasedCanceledHandler}
                purchasedContinued = {this.purchaseContinueHandler}/>;
}
        
    if (this.state.loading) {
    orderSummary = <Spinner />;
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
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (name) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: name}),
        onIngredientRemoved: (name) => dispatch({type: actionTypes.REM_INGREDIENT, ingredientName: name})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
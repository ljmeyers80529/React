import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/BurgerSummary/BurgerSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        axios.get('https://react-burgerbuilder-2d4fc.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients: response.data})
        })
        .catch(error => {
            this.setState({error: true})
        });
    }

    updatePurchaeState (ingredients) {
        const sum =Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            }).reduce((sum, element) => {
                return sum + element
            }, 0);
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceAddition + oldPrice;
        const updatedIngredients = {
            ...this.state.ingredients
        }; 

        updatedIngredients[type] = updatedCount;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaeState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const priceReduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;
        const updatedIngredients = {
            ...this.state.ingredients
        }; 

        updatedIngredients[type] = updatedCount;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaeState(updatedIngredients);
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchasedCanceledHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        // alert('You pressed to continue.');
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Me',
                address: {
                    street: 'Main',
                    zipcode: 12322,
                    city: 'Anywhere'
                },
                email: 'xyz@mail.xxx'
            },
            deviveryMethod: 'snail mail'
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false, purchasing: false});
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false});
            });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;
        let  burger = this.state.error ?  <p>Ingredients can not be loaded!</p> :<Spinner />

        if (this.state.ingredients) {
            burger = (
                <Auxillary>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                      ingredientAdded = {this.addIngredientHandler}
                      ingredientRemoved = {this.removeIngredientHandler}
                      disabled = {disabledInfo}
                      purchasable = {this.state.purchasable}
                      ordered = {this.purchaseHandler}
                      price = {this.state.totalPrice}/>
                </Auxillary>
                );
                orderSummary =  <OrderSummary 
                ingredients = {this.state.ingredients} 
                price = {this.state.totalPrice}
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

export default withErrorHandler(BurgerBuilder, axios);
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import * as action from '../../store/actions/index';

class Checkout extends Component {

    // state = {
    //     ingredients: null,
    //     totalPrice: 0
    // }

    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let totalPrice = 0;

    //     for(let param of query.entries()) {
    //         if (param[0] === 'price') {
    //             totalPrice = +param[1];
    //         } else {
    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState({ingredients: ingredients, totalPrice: totalPrice});
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render () {
        let summary = <Redirect to="/" />
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchaed ? <Redirect to="/" /> : null;   
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        checkoutCancelled = {this.checkoutCancelledHandler}
                        checkoutContinue = {this.checkoutContinueHandler}
                        ingredients={this.props.ings} />
                        <Route 
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData}
                    />
                </div>
            );
        }

        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchaed: state.order.purchased
    };
}

export default connect(mapStateToProps)(Checkout);
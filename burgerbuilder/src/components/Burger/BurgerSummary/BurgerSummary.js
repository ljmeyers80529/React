import React from 'react';

import Button from '../../UI/Button/Button';
import Auxillary from '../../../hoc/Auxillary';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style = {{textTransform: 'capilaize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        });
    return (
        <Auxillary>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchasedCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchasedContinued}>CONTINUE</Button>
        </Auxillary>
    );
};

export default orderSummary;
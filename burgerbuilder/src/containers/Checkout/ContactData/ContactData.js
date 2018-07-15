import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import axios from '../../../axios-orders';

import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        orderForm: {
                name: { elementType: 'input',
                        elementConfig: {
                           type: 'text',
                           placeholder: 'Your name'
                        },
                        value: ''
                    },
                email: { elementType: 'input',
                         elementConfig: {
                           type: 'email',
                           placeholder: 'Your email addr'
                        },
                        value: ''
                    },
                city: { elementType: 'input',
                        elementConfig: {
                           type: 'text',
                            placeholder: 'Your city'
                    },
                    value: ''
                },
                street: { elementType: 'input',
                          elementConfig: {
                            type: 'text',
                            placeholder: 'Your street addr'
                        },
                        value: ''
                    },
                zipcode: { elementType: 'input',
                           elementConfig: {
                            type: 'text',
                            placeholder: 'Your zipcode'
                        },
                        value: ''
                    },
                deleveryMethod: { elementType: 'select',
                                    elementConfig: {
                                        options: [
                                            {value: 'fastest', displayValue: 'Fastest' },
                                            {value: 'snail mail', displayValue: 'Cheapest'}
                                        ]
             },
             value: ''
         },
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
      this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
        }

    render() {
        let form = (<form>
            <Input  />
            <Input inputtype='input' type="email" name="email" placeholder="Your email" />
            <Input inputtype='input' type="text" name="city" placeholder="Your city" />
            <Input inputtype='input' type="text" name="street" placeholder="Your street" />
            <Input inputtype='input' type="text" name="zipcode" placeholder="Your zipcode" />
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
);
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    };
}

export default ContactData;

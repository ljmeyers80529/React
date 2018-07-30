import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBulder';
import Logout from './containers/auth/logout/logout';
import * as actions from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncCheckOut = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
  return import('./containers/auth/auth');
});

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" exact component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to ="/" />
      </Switch>
    );

    if (this.props.isAuthenticatd) {
      routes = (
        <Switch>
            <Route path="/checkout" component={asyncCheckOut} />
            <Route path="/orders" component={asyncOrders} />
            <Route path='/logout' exact component={Logout} />
            <Route path="/auth" exact component={asyncAuth} />
            <Route path="/" exact component={BurgerBuilder} />
            <Redirect to ="/" />
        </Switch>
      );
    };

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  } 
}

const mapStateToProps = state => {
  return {
    isAuthenticatd: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

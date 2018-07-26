import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBulder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/auth/auth';
import Logout from './containers/auth/logout/logout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/" exact component={BurgerBuilder} />
            <Route path='/logout' exact component={Logout} />
          </Switch>
          {/* <BurgerBuilder />
          <Checkout /> */}
        </Layout>
      </div>
    );
  } 
}

export default App;

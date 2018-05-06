import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Products from './containers/Products';
import Cart from './containers/Cart';
import Header from './components/Header';

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default PublicRoutes;
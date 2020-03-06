import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import { withBookstoreService } from './components/HigherOrderComponents/WithBookstoreService';
import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart';

const App = ({ bookstoreService }) => {
  return (
    <Switch>
      <Route
        path="/"
        component={Home}
        exact
      />
      <Route
        path="/cart"
        component={Cart}
      />
    </Switch>
  );
};

export default withBookstoreService()(App);

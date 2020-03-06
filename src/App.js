import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import { withBookstoreService } from './components/HigherOrderComponents/WithBookstoreService';
import Home from './components/Pages/Home';
import Card from './components/Pages/Card';

const App = ({ bookstoreService }) => {
  return (
    <Switch>
      <Route
        path="/"
        component={Home}
        exact
      />
      <Route
        path="/card"
        component={Card}
      />
    </Switch>
  );
};

export default withBookstoreService()(App);

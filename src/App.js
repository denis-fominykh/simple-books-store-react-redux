import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import ShopHeader from './components/ShopHeader/ShopHeader';
import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart';

const App = () => {
  return (
    <main className="container" role="main">
      <ShopHeader numItems={5} total={210} />
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
    </main>
  );
};

export default App;

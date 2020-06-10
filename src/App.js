import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import ShopHeader from './components/ShopHeader/ShopHeader';
import { HomePage, CartPage } from './components/Pages';

const App = () => {
  return (
    <main className="container" role="main">
      <ShopHeader numItems={5} total={210} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;

import React from 'react';
import './App.scss';

import { withBookstoreService } from './components/HigherOrderComponents/WithBookstoreService';

const App = ({ bookstoreService }) => {
  return (
    <div className="App">
      <h1>Simple Books Store</h1>
    </div>
  );
};

export default withBookstoreService()(App);

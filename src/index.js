import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

import App from './App';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';
import BookstoreService from './services/bookstoreService';
import { BookstoreServiceProvider } from './components/BookstoreServiceContext/BookstoreServiceContext';

import store from './store';

import * as serviceWorker from './serviceWorker';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App/>
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

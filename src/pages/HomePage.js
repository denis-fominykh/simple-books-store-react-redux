import React from 'react';

import ShoppingCartTable from '../components/ShoppingCartTable';
import BookListContainer from '../components/BookListContainer';

const HomePage = () => {
  return (
    <div>
      <BookListContainer />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;

import React from 'react';

import ShoppingCartTable from '../ShoppingCartTable';
import BookList from '../BookList';

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;

import React from 'react';

import ShoppingCartTable from '../ShoppingCartTable';
import BookList from '../BookList';

const Home = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default Home;

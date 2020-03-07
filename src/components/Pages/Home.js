import React from 'react';
import ShoppingCartTable from '../ShoppingCartTable/ShoppingCartTable';
import BookList from '../BookList/BookList';

const Home = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
}

export default Home;

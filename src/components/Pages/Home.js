import React from 'react';
import BookList from '../BookList/BookList';

const Home = () => {
  const books = [
    {
      id: 1,
      title: "The Captain's Daughter",
      author: 'Alexander Pushkin',
    },
    {
      id: 2,
      title: 'The Call of the Wild',
      author: 'Jack London',
    },
  ]
  return (
    <BookList books={books}/>
  );
}

export default Home;

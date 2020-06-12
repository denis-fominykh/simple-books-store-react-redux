import React from 'react';

import './BookList.scss';

import BookListItem from '../BookListItem';

const BookList = ({ books, onAddedToCard }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddedToCard={() => onAddedToCard(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;

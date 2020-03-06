import React from 'react';
import { render } from 'node-sass';

const BookListItem = ({ book }) => {
  const { title, author } = book;

  return(
    <React.Fragment>
      <span>{title}</span>
      <span>{author}</span>
    </React.Fragment>
  );
}

export default BookListItem;

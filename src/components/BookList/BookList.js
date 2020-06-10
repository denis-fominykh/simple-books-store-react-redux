import React, { Component } from 'react';
import { connect } from 'react-redux';

import './BookList.scss';

import BookListItem from '../BookListItem';
import booksLoaded from '../../actions';
import withBookstoreService from '../HOC';

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;

    bookstoreService.getBooks().then((data) => {
      booksLoaded(data);
    });
  }

  render() {
    const { books } = this.props;
    return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (newBooks) => {
      dispatch(booksLoaded(newBooks));
    },
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList),
);

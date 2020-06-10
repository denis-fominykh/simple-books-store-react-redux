import React, { Component } from 'react';
import { connect } from 'react-redux';

import './BookList.scss';

import BookListItem from '../BookListItem';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import withBookstoreService from '../HOC';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

class BookList extends Component {
  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError,
    } = this.props;

    booksRequested();
    bookstoreService
      .getBooks()
      .then((data) => {
        booksLoaded(data);
      })
      .catch((error) => booksError(error));
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

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
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (newBooks) => dispatch(booksLoaded(newBooks)),
    booksRequested: () => dispatch(booksRequested()),
    booksError: (error) => dispatch(booksError(error)),
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList),
);

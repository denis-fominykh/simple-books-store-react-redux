import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  booksLoaded,
  booksRequested,
  booksError,
  bookAddedToCart,
} from '../../actions';
import withBookstoreService from '../HOC';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import BookList from '../BookList';

class BookListContainer extends Component {
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
    const { books, loading, error, onAddedToCard } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCard={onAddedToCard} />;
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
    onAddedToCard: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer),
);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import './BookList.scss';

import BookListItem from '../BookListItem';
import { booksLoaded, booksRequested } from '../../actions';
import withBookstoreService from '../HOC';
import Spinner from '../Spinner';

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;

    booksRequested();
    bookstoreService.getBooks().then((data) => {
      booksLoaded(data);
    });
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />;
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (newBooks) => {
      dispatch(booksLoaded(newBooks));
    },
    booksRequested: () => dispatch(booksRequested()),
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList),
);

import React, { Component } from 'react';
import BookListItem from '../BookListItem/BookListItem';
import { connect } from 'react-redux';
import './BookList.scss';

import { withBookstoreService } from '../HigherOrderComponents/WithBookstoreService';
import { booksLoaded } from '../../actions/actions';

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    this.props.booksLoaded(data);
  }


  render() {
    const { books } = this.props;
    return (
      <ul className="book-list">
        {books.map(book => {
          return <li key={book.id}><BookListItem book={book} /></li>
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: newBooks => {
      dispatch(booksLoaded(newBooks));
    }
  }
}

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));

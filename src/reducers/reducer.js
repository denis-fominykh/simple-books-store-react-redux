const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);

      const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);
      const item = state.cartItems[itemIndex];

      let newItem;

      if (item) {
        newItem = {
          ...item,
          count: item.count + 1,
          total: item.total + book.price,
        };
      } else {
        newItem = {
          id: book.id,
          title: book.title,
          count: 1,
          total: book.price,
        };
      }

      if (itemIndex < 0) {
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIndex),
            newItem,
            ...state.cartItems.slice(itemIndex + 1),
          ],
        };
      }
    case 'BOOK_REMOVED_FROM_CART':
      const removeBookId = action.payload;
      const removeBook = state.books.find(({ id }) => id === removeBookId);

      const removeItemIndex = state.cartItems.findIndex(
        ({ id }) => id === removeBookId,
      );
      const removeItem = state.cartItems[removeItemIndex];

      let updateItem;

      if (removeItem) {
        updateItem = {
          ...removeItem,
          count: removeItem.count - 1,
          total: removeItem.total - removeBook.price,
        };
      }

      if (removeItem.count === 1) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, removeItemIndex),
            ...state.cartItems.slice(removeItemIndex + 1),
          ],
        };
      }

      if (removeItemIndex < 0) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, removeItemIndex),
            updateItem,
            ...state.cartItems.slice(removeItemIndex + 1),
          ],
        };
      }
    case 'ALL_BOOKS_REMOVED_FROM_CART':
      const removeBooksId = action.payload;
      const removeItemsIndex = state.cartItems.findIndex(
        ({ id }) => id === removeBooksId,
      );

      if (removeItemsIndex < 0) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, removeItemsIndex),
            ...state.cartItems.slice(removeItemsIndex + 1),
          ],
        };
      }
    default:
      return state;
  }
};

export default reducer;

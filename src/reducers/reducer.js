const initialState = {
  books: [
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
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

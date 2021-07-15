// Action Creators
export const addBook = (book) => {
  return {
    type: "books/add",
    payload: book,
  };
};

export const removeBook = (id) => {
  return {
    type: "books/remove",
    payload: id,
  };
};

// Reducers
const initialState = [] //array of authors

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case "books/add":
      return [...state, action.payload];

    case "books/remove":
      const newBooks = state.filter((book) => book.id !== action.payload);
      return newBooks;

    default:
      return state;
  }
}

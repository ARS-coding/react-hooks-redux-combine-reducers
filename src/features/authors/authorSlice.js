import { v4 as uuid } from 'uuid';

// Action Creators
export const addAuthor = (author) => {
    return {
      type: "authors/add",
      payload: author,
    };
  };
  
  export const removeAuthor = (id) => {
    return {
      type: "authors/remove",
      payload: id,
    };
  };

  // Reducers
const initialState = []; //array of authors

export default function authorsReducer(state = initialState, action) {
    switch (action.type) {
      case "authors/add":
        return [...state, action.payload]
  
      case "authors/remove":
        const newAuthors = state.filter(
          (author) => author.id !== action.payload
        );
        return newAuthors;

        case "books/add":
          const existingAuthor = state.find(
            (author) => author.authorName === action.payload.authorName
          );
          if (existingAuthor) {
            return state;
          } else {
            return [...state, { authorName: action.payload.authorName, id: uuid() }];
          }

      default:
        return state;
    }
  }
  
  
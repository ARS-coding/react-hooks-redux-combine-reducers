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
  
      default:
        return state;
    }
  }
  
  
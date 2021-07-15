import booksReducer from "./features/books/booksSlice";
import authorsReducer from "./features/authors/authorSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    authors: authorsReducer,
    books: booksReducer
})

export default rootReducer;
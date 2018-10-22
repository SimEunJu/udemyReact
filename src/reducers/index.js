import {combineReducers} from 'redux';
import BooksReducer from './reducer_books.js'
import ActiveBook from '.reducer_active_books'
const rootReducer = combineReducers({
  // 'books' is function which return a array of state.
  books: BooksReducer
  activeBook: ActiveBook;
});

export default rootReducer;

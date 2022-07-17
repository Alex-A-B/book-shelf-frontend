import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/auth/loginSlice';
import bookshelfReducer from '../features/bookshelf/bookshelfSlice'
import ratingsReducer from '../features/ratings/ratingsSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    bookshelf: bookshelfReducer,
    ratings: ratingsReducer
  },
});

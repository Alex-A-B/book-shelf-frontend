import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/auth/loginSlice';
import bookshelfReducer from '../features/bookshelf/bookshelfSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    bookshelf: bookshelfReducer,
  },
});

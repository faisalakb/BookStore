import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/bookSlice';
import categorySlice from './categories/categorySlice';

const store = configureStore({
  reducer: {
    user: bookSlice,
    categories: categorySlice,

  },

});

export default store;

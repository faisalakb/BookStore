import { createSlice } from '@reduxjs/toolkit';
import bookData from './bookList.json';

const bookSlice = createSlice({
  name: 'books',
  initialState: bookData,
  reducers: {
    addBook(state, action) {
      state.push(action.payload);
    },
    removeBook(state, action) {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;

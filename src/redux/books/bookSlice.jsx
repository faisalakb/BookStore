import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7J88ab57HvQlIbDye75B/books/';

export const fetchBooks = createAsyncThunk('fetchBooks', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const addBookdata = createAsyncThunk('addBookdata', async (bookInfo) => {
  const response = await axios.post(url, bookInfo);
  return response.data;
});

export const removeBookdata = createAsyncThunk('removeBookdata', async (bookId) => {
  await axios.delete(url + bookId);
  return bookId;
});

const bookSlice = createSlice({
  name: 'user',
  initialState: {
    data: {},
    isLoading: false,
    isError: false,
  },
  reducers: {
    // addBook(state, action) {
    //   state.data.push(action.payload);
    // },
    // removeBook(state, action) {
    //   return { ...state, data: state.data.filter((book) => book.id !== action.payload) };
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      }))
      .addCase(fetchBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }))
      .addCase(addBookdata.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(addBookdata.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          [action.payload.item_id]: [action.payload],
        },
      }))
      .addCase(addBookdata.rejected, (state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }))

      .addCase(removeBookdata.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(removeBookdata.fulfilled, (state, action) => {
        const newBookData = { ...state.data };

        // Iterate through each book ID in newBookData
        Object.keys(newBookData).forEach((bookId) => {
          // Filter out the book with the matching item_id
          newBookData[bookId] = newBookData[bookId].filter(
            (book) => book.item_id !== action.payload,
          );
        });

        return {
          ...state,
          isLoading: false,
          data: newBookData,
        };
      })

      .addCase(removeBookdata.rejected, (state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }));
  },
});

export default bookSlice.reducer;

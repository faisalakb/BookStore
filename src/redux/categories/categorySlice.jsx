import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: [],
  reducers: {
    statusCheck(state, action) {
      return action.payload;
    },
  },
});

export const { statusCheck } = categorySlice.actions;
export default categorySlice.reducer;
